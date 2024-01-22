window.addEventListener('DOMContentLoaded', function () {

    const questions = [
        {
            q: 'Commonly used data types DO NOT include:',
            a: '1. Strings',
            b: '2. Booleans',
            c: '3. Alerts',
            d: '4. Numbers',
            answer: '3. Alerts',
        },
        {
            q: 'The condition in an if / else statement is enclosed with ____',
            a: '1. Quotes',
            b: '2. Curly Brackets',
            c: '3. Parenthesis',
            d: '4. Square Brackets',
            answer: '3. Parenthesis',
        },
        {
            q: 'Arrays in JavaScript can be used to store ____.',
            a: '1. Numbers and Strings',
            b: '2. Other Arrays',
            c: '3. Booleans',
            d: '4. All of the Above',
            answer: '4. All of the Above',
        },
        {
            q: 'String values must be enclosed within ____ when being assigned to variables',
            a: '1. Commas',
            b: '2. Curly Brackets',
            c: '3. Quotes',
            d: '4. Parenthesis',
            answer: '3. Quotes',
        },
        {
            q: 'A very useful tool used during development and debugging for prionting content to the debugger is:',
            a: '1. JavaScript',
            b: '2. Terminal/Bash',
            c: '3. For Loops',
            d: '4. console.log',
            answer: '4. console.log',
        },
    ];

    var clickStart = document.getElementById("start");
    var clickHighScores = document.querySelector('.scores'); // Move this line up
    var timerEl = document.getElementById("timer");
    var timeRemaining = 60;
    var questionContainer = document.querySelector("#quiz-container");
    var wrapper = document.getElementById('wrapper');
    var quizDuration;
    var currentQuestionIndex = 0;
    var userScore = 0;

    function adjustTime(amount) {
        timeRemaining += amount;
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        timerEl.textContent = ' ' + timeRemaining + 's';
    }

    function endQuiz() {
        clearInterval(quizDuration);
        // Your logic for ending the quiz
        // Additional logic if needed
    }

    function timer() {
        timerEl.textContent = ' ' + timeRemaining + 's';
        quizDuration = setInterval(function() {
            if (timeRemaining > 0) {
                adjustTime(-1);
            } else {
                endQuiz();
            }
        }, 1000);
    }

    function startQuiz() {
        timer();
        wrapper.setAttribute('class', 'hidden');
        questionContainer.removeAttribute('class');
        renderQuestion();
    }

    function renderQuestion() {
        questionContainer.innerHTML = "";

        var questionHeader = document.createElement("h2");
        questionHeader.textContent = questions[currentQuestionIndex].q;

        var answerA = createAnswerButton(questions[currentQuestionIndex].a);
        var answerB = createAnswerButton(questions[currentQuestionIndex].b);
        var answerC = createAnswerButton(questions[currentQuestionIndex].c);
        var answerD = createAnswerButton(questions[currentQuestionIndex].d);

        questionContainer.appendChild(questionHeader);
        questionContainer.appendChild(answerA);
        questionContainer.appendChild(answerB);
        questionContainer.appendChild(answerC);
        questionContainer.appendChild(answerD);
    }

    function createAnswerButton(text) {
        var answerButton = document.createElement("button");
        answerButton.textContent = text;
        answerButton.addEventListener("click", answerClick);
        return answerButton;
    }

    function answerClick(event) {
        event.preventDefault();
        var userAnswer = event.target.textContent;
        var correctAnswer = questions[currentQuestionIndex].answer;
        var answerDetermination = document.querySelector("#answer-determination");

        if (userAnswer !== correctAnswer) {
            adjustTime(-10);
            answerDetermination.textContent = "Wrong!";
        } else {
            userScore++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {
            renderQuestion();
        }
    }

    function endQuizPage() {
        resetDisplay();
        timerEl.textContent = '';
        clearInterval(quizDuration);
        var endPage = document.createElement('h2');
        questionContainer.appendChild(endPage);

        var blank = document.querySelector('#answer-determination');
        blank.innerHTML = '';

        endPage.innerHTML = 'All done! Your final score is ' + userScore + '.' + 'Enter your initials to save (max 3)';

        var initialBox = document.createElement('input');
        blank.appendChild(initialBox);

        var submitInitialBtn = document.createElement('button');
        submitInitialBtn.textContent = 'Submit';
        blank.appendChild(submitInitialBtn);

        submitInitialBtn.addEventListener('click', function () {
            if (initialBox.value.length === 0) return false;
            var data = JSON.stringify({ "name": initialBox.value, "score": userScore });
            localStorage.setItem('object', data);

            var playAgain = document.createElement('button');
            playAgain.textContent = 'Play Again!';
            blank.appendChild(playAgain);
            playAgain.style.display = 'none';

            playAgain.addEventListener('click', function () {
                location.reload();
            });

            playAgain.style.display = 'block';
        });

        document.querySelector('input').value = '';
        initialBox.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }

    function resetDisplay() {
        questionContainer.innerHTML = '';
        document.querySelector("#homepage").style.display = "none";
    }

    function highScores() {
        let data = localStorage.getItem("object");
        let getData = JSON.parse(data);
        let name = getData.name;
        let score = getData.score;
        questionContainer.innerHTML = '';
        questionContainer.innerHTML = name + ' ' + score;
    }

    clickStart.addEventListener('click', startQuiz);
    clickHighScores.addEventListener('click', highScores);
});