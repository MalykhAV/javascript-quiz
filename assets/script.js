var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3"); 
var answer4El = document.getElementById("answer4");

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
    answers: [
      {
        value: "strings",
        correct: false,
      },
      {
        value: "booleans",
        correct: false,
      },
      {
        value: "alert",
        correct: true,
      },
      {
        value: "numbers",
        correct: false,
      }
    ]
  },
  {
    question: "The condition in a if / else statement is enclosed within ______.",
    answers: [
      {
        value: "quotes",
        correct: false,
      },
      {
        value: "curly brackets",
        correct: false,
      },
      {
        value: "parentheses",
        correct: true,
      },
      {
        value: "square brackets",
        correct: false,
      },
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      {
        value: "numbers ans strings",
        correct: false,
      },
      {
        value: "other arrays",
        correct: false,
      },
      {
        value: "booleans",
        correct: false,
      },
      {
        value: "all of the above",
        correct: true,
      },
    ]
  },
  {
    question: "Strings value must be anclosed within _____ when being assigned to variables.",
    answers: [
      {
        value: "commas",
        correct: false,
      },
      {
        value: "curly brackets",
        correct: false,
      },
      {
        value: "quotes",
        correct: true,
      },
      {
        value: "parentheses",
        correct: false,
      }
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      {
        value: "JavaScript",
        correct: false,
      },
      {
        value: "terminal / bash",
        correct: false,
      },
      {
        value: "for loops",
        correct: false,
      },
      {
        value: "console.log",
        correct: true,
      },
    ]
  },
];

var currentQuestion = 0;

//var backAction = function() {
//  if (currentQuestion > 0) {
//    currentQuestion--;
//    askQuestion();
//  }
//};

var nextAction = function(event) {
  console.log(event.target.dataset.correct);

  if (currentQuestion < (questions.length - 1)) {
    currentQuestion++;
    askQuestion();
  }
};

var askQuestion = function () {
  
  answer1El.dataset.correct = "false";
  answer2El.dataset.correct = "false";
  answer3El.dataset.correct = "false";
  answer4El.dataset.correct = "false";

  questionEl.textContent = questions[currentQuestion].question;
  answer1El.textContent = questions[currentQuestion].answers[0].value;
  answer2El.textContent = questions[currentQuestion].answers[1].value;
  answer3El.textContent = questions[currentQuestion].answers[2].value;
  answer4El.textContent = questions[currentQuestion].answers[3].value;
  
  // mark the correct answer in data set attribute
  for(var i = 0; i < questions[currentQuestion].answers.length; i++) {
    if (questions[currentQuestion].answers[i].correct) {
      if (i == 0) {
        answer1El.dataset.correct = "true";
      }
      if (i == 1) {
        answer2El.dataset.correct = "true";
      }
      if (i == 2) {
        answer3El.dataset.correct = "true";
      }
      if (i == 3) {
        answer4El.dataset.correct = "true";
      }
    }
  }
}


var startAction = function(event) {
  countdown();
  askQuestion();
}

answer1El.onclick = nextAction;
answer2El.onclick = nextAction;
answer3El.onclick = nextAction;
answer4El.onclick = nextAction; //show the score
startBtn.onclick = startAction;
