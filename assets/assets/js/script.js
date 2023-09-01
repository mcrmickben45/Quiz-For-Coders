// Provides questions and answers for coding quiz //

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

const clickStart = document.getElementById('start');
const timerEl = document.getElementByID('countdown');
