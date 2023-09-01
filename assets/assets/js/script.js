const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        selection: [
            "1. Strings",
            "2. Booleans",
            "3. Alerts",
            "4. Numbers"
        ],
        answer: "2. Booleans"
    },
    {
        question: "The condition in an if / else statement is enclosed with ____",
        selection: [
            "1. Quotes",
            "2. Curly Brackets",
            "3. Parenthesis",
            "4. Square Brackets"
        ],
        answer: "3. Parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        selection: [ 
            "1. Numbers and Strings",
            "2. Other Arrays",
            "3. Booleans",
            "4. All of the Above"
        ],
        answer: "4. All of the Above",
    },    
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        selection: [
            "1. Commas",
            "2. Curly Brackets",
            "3. Quotes",
            "4. Parenthesis"
        ],
        answer: "2. Curly Brackets",
    },
    {
        question: "A very useful tool used during development and debugging for prionting content to the debugger is:",
        selection: [
            "1. JavaScript",
            "2. Terminal/Bash",
            "3. For Loops",
            "4. console.log"
        ],
        answer: "3. For Loops",
    },
];

const clickStart = document.getElementById('start-quiz');
const timerEl = document.getElementById('timer');
const timeRemaining = 60;
const questionContainer = document.querySelector('quiz-container');

function timer () {
    timerEl.textContent = 'Time Remaing: ' + timeRemaining + 's';
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
    timerEl.textContent = 'Time Remaing: ' + timeRemaing + 's';
}

clickStart.onclick = timer; 

function renderQuestion(question) {
    questionContainer.innerHTML = '';

    const questionHeader = document.createElement('h2');
    questionHeader.textContent = question.q;

    const questionA = document.createElement('button');
    answerA.textContent = question.a;
    answerA.addEventListener ('click', answerClick)

    const questionB = document.createElement('button');
    answerB.textContent = question.b;
    answerB.addEventListener ('click', answerClick)

    const questionC = document.createElement('button');
    answerC.textContent = question.c;
    answerC.addEventListener ('click', answerClick)

    const questionD = document.createElement('button');
    answerD.textContent = question.d;
    answerD.addEventListener ('click', answerClick)

    questionContainer.appendChild(questionHeader);
    questionContainer.appendChild(answerA);
    questionContainer.appendChild(answerB);
    questionContainer.appendChild(answerC);
    questionContainer.appendChild(answerD);
};

let currentQuestionIndex = 0;
let userScore = 0;
let correctAnswer = questions[currentQuestionIndex].answer;
const clickHighScores = document.getElementById('high-scores');

const answerClick = function(event) {
    event.preventDefault();
    const userAnswer = event.target.textContent;
    correctAnswer = questions[currentQuestionIndex].answer;
    const answerDetermination = document.querySelector('.answer-determination');

   
    if (userAnswer !== correctAnswer) {
        adjustTime(-10);
        answerDetermination.textContent = 'Wrong!';
        //
    } else {
        currentQuestionIndex++; // 
        answerDetermination.textContent = 'Correct!';
        userScore++;
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
        } else {
            renderQuestion(questions[currentQuestionIndex]);
        }
    }
};

const quiz = function (event) { 
    event.preventDefault();
    resetDisplay();
    renderQuestion(questions[currentQuestionIndex])
};

function resetDisplay() {
    questionContainer.innerHTML = '';
    document.querySelector('.homepage').style.display = 'none';
};

function highScores() {
    const data = localStorage.getItem('object');
    const getData = JSON.parse;
    const name = getData.name;
    const score = getData.score;
    questionContainer.innerHTML = '';
    questionContainer.innerHTML = name + '' + score;
};

clickHighScores.addEventListener('click', () =>
    { highScores ();
})

const initials = ''; 
function endQuizPage () {
    resetDisplay();
    timerEl.textContent = '';
    clearInterval(quizDuration);
    const endPage = document.createElement ('h2');
    questionContainer.appendChild(endPage);

    const blank = document.querySelector('answer-determination');
    blank.innerHTML = '';

    endPage.innerHTML = 'All done! Your final score is ' + 'userScore + .' + 'Enter your initials to save (max 3)';

    const initialBox = document.createElement('input');
    blank.appendChild(initialBox);

    const submitInitialBtn= document.createElement('button');
    submitInitialBtn.appendChild= 'Submit';
    blank.appendChild(submitInitialBtn);

    submitInitialBtn.addEventListener('click', () =>
    { if (initialBox.value.length === 0) return false;
        const storeInitials = (...input) =>
        {
            const data = JSON.stringify({ "name":input[0], "score":input[1]})
            localStorage.setItem('object', data)
        }
        storeInitials(initialBox.value, userScore);

        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again!'; 
        blank.appendChild(playAgain);

        playAgain.eventListener('click', () =>
       {location.reload()
    })
    })

    document.querySelector('input').value = '';
    initialBox.addEventListener('submit', endQuizPage);
};

clickStart.addEventListener('click', quiz); 
