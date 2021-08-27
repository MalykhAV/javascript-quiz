var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var backBtn = document.getElementById("back");
var nextBtn = document.getElementById("next");

// Timer that counts down from 60
var countdown = function() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
};

var questions = [
  {
  question: "Commonly used data types DO NOT include:",
  answers: ["strings", "booleans", "alert", "numbers"],
  correct: "alerts" 
  },
  {
  question: "The condition in a if / else statement is enclosed within ______.",
  answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
  correct: "parentheses"
  },
  {
  question: "Arrays in JavaScript can be used to store _____.",
  answers: ["numbers ans strings", "other arrays", "booleans", "all of the above"],
  correct: "all of the above"
  },
  {
  question: "Strings value must be anclosed within _____ when being assigned to variables.",
  answers: ["commas", "curly brackets", "quotes", "parentheses"],
  correct: "quotes"
  },
  {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
  correct: "console.log"
  }
];

var currentQuestion = 0;

var backAction = function() {
  if (currentQuestion > 0) {
    currentQuestion--;
    askQuestion();
  }
};

var nextAction = function() {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    askQuestion();
  }
};

var askQuestion = function () {
  var questionEl = document.getElementById("question");
  var answer1El = document.getElementById("answer1");
  var answer2El = document.getElementById("answer2");
  var answer3El = document.getElementById("answer3"); 
  var answer4El = document.getElementById("answer4");

  questionEl.textContent = questions[currentQuestion].question;
  answer1El.textContent = questions[currentQuestion].answers[0];
  answer2El.textContent = questions[currentQuestion].answers[1];
  answer3El.textContent = questions[currentQuestion].answers[2];
  answer4El.textContent = questions[currentQuestion].answers[3];
  
}

var startAction = function(event) {
  countdown();
  askQuestion();
}

backBtn.onclick = backAction;
nextBtn.onclick = nextAction;
startBtn.onclick = startAction;
