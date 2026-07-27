// =========================
// SCREEN REFERENCES
// =========================

const loadingScreen = document.getElementById("loadingScreen"); 
const welcomeScreen = document.getElementById("welcomeScreen"); 
const introScreen = document.getElementById("introScreen"); 
const quizScreen = document.getElementById("quizScreen"); 
const phoneScreen = document.getElementById("phoneScreen"); 
const birthdayScreen = document.getElementById("birthdayScreen");
const startButton = document.getElementById("startJourney"); 
const continueJourney = document.getElementById("continueJourney"); 
const nextQuestion = document.getElementById("nextQuestion"); 
const acceptCall = document.getElementById("acceptCall"); 
const declineCall = document.getElementById("declineCall"); 
const cakeBtn = document.getElementById("cakeBtn");
const bgMusic = document.getElementById("bgMusic"); 
const cake = document.getElementById("cake"); 
const cakeMessage = document.getElementById("cakeMessage");
const questionText = document.getElementById("questionText"); 
const questionNumber = document.getElementById("questionNumber"); 
const options = document.getElementById("options");
const quizData = [
    {
        question: "Who is the most beautiful girl? ❤️",
        answers: ["Diksha ❤️", "Someone Else", "Nobody", "Don't Know"],
        correct: 0
    },
    {
        question: "Who makes me smile everyday? 😊",
        answers: ["Diksha ❤️", "Mobile", "Friends", "Food"],
        correct: 0
    },
    {
        question: "Today's Birthday Queen is? 👑",
        answers: ["Diksha ❤️", "Me", "Nobody", "Everyone"],
        correct: 0
    }
];

let currentQuestion = 0;

function showScreen(screen){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
screen.classList.add("active"); }

function loadQuestion(){

    const q = quizData[currentQuestion];

    questionNumber.innerHTML =
    `Question ${currentQuestion + 1} of ${quizData.length}`;

    questionText.innerHTML = q.question;

    options.innerHTML = "";



}



function checkAnswer(index){

    if(index === quizData[currentQuestion].correct){

        alert("❤️ Correct!");

    }else{

        alert("😊 Nice Try!");

    }

}

function createConfetti(){

    for(let i = 0; i < 80; i++){

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = (Math.random() * 100) + "vw";

        c.style.background = `hsl(${Math.random() * 360},100%,50%)`;

        c.style.animationDuration = (2 + Math.random() * 2) + "s";

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 4000);

    }

}

window.addEventListener("load", () => {

    setTimeout(() => {

        showScreen(welcomeScreen);

    }, 3000);

});

startButton.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

    showScreen(introScreen);

});

continueJourney.addEventListener("click", () => {

    currentQuestion = 0;

    loadQuestion();

    showScreen(quizScreen);

});

nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        showScreen(phoneScreen);

    }

});

acceptCall.addEventListener("click", () => {

    showScreen(birthdayScreen);

});

declineCall.addEventListener("click", () => {

    alert("😂 Sorry! You have to accept the call.");

});
cakeBtn.addEventListener("click", () => {

    cake.classList.add("cutCake");

    cake.innerHTML = "🍰";

    cakeMessage.innerHTML = "🎉 Happy Birthday Diksha ❤️";

    createConfetti();

});
