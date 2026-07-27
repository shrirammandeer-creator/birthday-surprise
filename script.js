// =========================
// SCREEN REFERENCES
// =========================

const screens = document.querySelectorAll(".screen");

const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const phoneScreen = document.getElementById("phoneScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const giftScreen = document.getElementById("giftScreen");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");

const bgMusic = document.getElementById("bgMusic");

function showScreen(screen){

    screens.forEach(s=>s.classList.remove("active"));

    screen.classList.add("active");

}
// =========================
// QUIZ DATA
// =========================

const quizData = [
    {
        question: "Who is the most beautiful girl? ❤️",
        answers: ["Diksha ❤️","Someone Else","Nobody","Don't Know"],
        correct: 0
    },
    {
        question: "Who makes me smile every day? 😊",
        answers: ["Diksha ❤️","Mobile","Friends","Food"],
        correct: 0
    },
    {
        question: "Today's Birthday Queen is? 👑",
        answers: ["Diksha ❤️","Me","Nobody","Everyone"],
        correct: 0
    }
];

let currentQuestion = 0;


// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showScreen(welcomeScreen);

    },3000);

});


// =========================
// WELCOME BUTTON
// =========================

const startJourney = document.getElementById("startJourney");

startJourney.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    showScreen(introScreen);

});
// =========================
// QUIZ ELEMENTS
// =========================

const continueJourney = document.getElementById("continueJourney");
const nextQuestion = document.getElementById("nextQuestion");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");


// =========================
// LOAD QUESTION
// =========================

function loadQuestion(){

    const q = quizData[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${quizData.length}`;

    questionText.textContent = q.question;

    options.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const btn = document.createElement("button");

        btn.className = "option";

        btn.textContent = answer;

        btn.onclick = ()=>{

            if(index === q.correct){

                btn.style.background="#28a745";

            }else{

                btn.style.background="#dc3545";

            }

            document.querySelectorAll(".option").forEach(b=>{

                b.disabled = true;

            });

        };

        options.appendChild(btn);

    });

}


// =========================
// INTRO BUTTON
// =========================

continueJourney.addEventListener("click",()=>{

    currentQuestion = 0;

    loadQuestion();

    showScreen(quizScreen);

});


// =========================
// NEXT QUESTION
// =========================

nextQuestion.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    }else{

        showScreen(phoneScreen);

    }

});
