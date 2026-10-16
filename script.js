
const questions = [
    {
        question: "1. Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "2. Which keyword is used to declare a variable?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "3. Which symbol is used for a single-line comment in JavaScript?",
        options: ["<!-- -->", "//", "**", "##"],
        answer: "//"
    },
    {
        question: "4. Which method adds an item to the end of an array?",
        options: ["pop()", "shift()", "push()", "join()"],
        answer: "push()"
    },
    {
        question: "5. Which method selects an element by its ID?",
        options: [
            "getElementById()",
            "getClass()",
            "queryId()",
            "selectId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "6. Which loop repeats while a condition is true?",
        options: ["if", "while", "switch", "break"],
        answer: "while"
    },
    {
        question: "7. Which event happens when a button is clicked?",
        options: ["change", "mouseover", "click", "submit"],
        answer: "click"
    },
    {
        question: "8. Which brackets are used to create a JavaScript array?",
        options: ["()", "{}", "[]", "<>"],
        answer: "[]"
    }
];

let currentQuestion = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const result = document.getElementById("result");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    questionNumber.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionText.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextButton.disabled = true;

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const button = document.createElement("button");

        button.textContent = questions[currentQuestion].options[i];
        button.classList.add("option-btn");

        button.addEventListener("click", function () {
            checkAnswer(button, questions[currentQuestion].options[i]);
        });

        optionsContainer.appendChild(button);
    }
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const optionButtons = document.querySelectorAll(".option-btn");

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
    }

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        feedback.textContent = "Correct answer!";
        score++;
    } else {
        button.classList.add("wrong");
        feedback.textContent = "Wrong answer! Correct answer: " + correctAnswer;

        for (let i = 0; i < optionButtons.length; i++) {
            if (optionButtons[i].textContent === correctAnswer) {
                optionButtons[i].classList.add("correct");
            }
        }
    }

    nextButton.disabled = false;
}

function showResult() {
    questionNumber.style.display = "none";
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    feedback.style.display = "none";
    nextButton.style.display = "none";
    result.style.display = "block";

    let message;

    if (score >= 7) {
        message = "Excellent work!";
    } else if (score >= 4) {
        message = "Good job! Keep practising!";
    } else {
        message = "Keep learning. You can do better!";
    }

    finalScore.textContent =
        "You scored " + score + " out of 8 — " + message;
}

nextButton.addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;

    questionNumber.style.display = "block";
    questionText.style.display = "block";
    optionsContainer.style.display = "flex";
    feedback.style.display = "block";
    nextButton.style.display = "inline-block";
    result.style.display = "none";

    showQuestion();
});

showQuestion();
