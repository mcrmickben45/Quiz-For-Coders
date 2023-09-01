const questions = [{
        question: 'Commonly used data types DO NOT include:',
        a: '1. Strings',
        b: '2. Booleans',
        c: '3. Alerts',
        d: '4. Numbers',
        answer: '3. Alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ____',
        a: '1. Quotes',
        b: '2. Curly Brackets',
        c: '3. Parenthesis',
        d: '4. Square Brackets',
        answer: '3. Parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        a: '1. Numbers and Strings',
        b: '2. Other Arrays',
        c: '3. Booleans',
        d: '4. All of the Above',
        answer: '4. All of the Above',
    },    
    {
        question: 'String values must be enclosed within ____ when being assigned to variables',
        a: '1. Commas',
        b: '2. Curly Brackets',
        c: '3. Quotes',
        d: '4. Parenthesis',
        answer: '3. Quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for prionting content to the debugger is:',
        a: '1. JavaScript',
        b: '2. Terminal/Bash',
        c: '3. For Loops',
        d: '4. console.log',
        answer: '4. console.log',
    },
];

const clickStart = document.getElementById('start-quiz');

const timerEl = document.getElementById('timer');
const timeRemaining = 60;
const questionContainer = document.querySelector('#quiz-container');

function timer () {
    timerEl.textContent = 'Time Remaining: ' + timeRemaining + 's';
    quizDuration = setInterval(function() {
        if (timeRemaining > 0) { 
            adjustTime(-1);
        } else {
            endQuiz();
        }
    }, 1000);
}

function adjustTime(amount) {
    timeRemaining += amount;
    if (timeRemaining < 0) {
        timeRemaining = 0;
    }
    timerEl.textContent = 'Time Remaining: ' + timeRemaining + 's';
}

clickStart.onclick = timer; 
const renderQuestion = function (question) {
    questionContainer.innerHTML = '';

    const questionHeader = document.createElement('h2');
    questionHeader.textContent = questions.question;

    const answerA = document.createElement('button');
    answerA.textContent = question.c;
    answerA.addEventListener ('click', answerClick)

    const answerB = document.createElement('button');
    answerB.textContent = question.c;
    answerB.addEventListener ('click', answerClick)

    const answerC = document.createElement('button');
    answerC.textContent = question.d;
    answerC.addEventListener ('click', answerClick)

    const answerD = document.createElement('button');
    answerD.textContent = question.c;
    answerD.addEventListener ('click', answerClick)

    const answerE = document.createElement('button');
    answerE.textContent = question.d;
    answerE.addEventListener ('click', answerClick)

    questionContainer.appendChild(questionHeader);
    questionContainer.appendChild(answerA);
    questionContainer.appendChild(answerB);
    questionContainer.appendChild(answerC);
    questionContainer.appendChild(answerD);
    questionContainer.appendChild(answerE);
};

let currentQuestionIndex = 0;
let userScore = 0;
let correctAnswer = questions[currentQuestionIndex].answer;
const clickHighScores = document.getElementById('high-scores');

const answerClick = function(event) {
    event.preventDefault();
    const userAnswer = event.target.textContent;
    correctAnswer = questions[currentQuestionIndex].answer;
    const answerDetermination = document.querySelector('#answer-determination');

    if (userAnswer !== correctAnswer) {
        adjustTime(-10);
        answerDetermination.textContent = 'Wrong!';
        currentQuestionIndex++; 
    if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {renderQuestion(questions[currentQuestionIndex])};

}
};

const quiz = function (event) { 
    event.preventDefault();
    resetDisplay();
    renderQuestion(questions[currentQuestionIndex]);
    timer();
};


