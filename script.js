// =========================
// SCREEN REFERENCES
// =========================

const cake = document.getElementById("cake");
const cakeMessage = document.getElementById("cakeMessage");
const birthdayScreen = document.getElementById("birthdayScreen");
const cakeBtn = document.getElementById("cakeBtn");
const phoneScreen = document.getElementById("phoneScreen");
const acceptCall = document.getElementById("acceptCall");
const declineCall = document.getElementById("declineCall");
const quizScreen = document.getElementById("quizScreen");
const nextQuestion = document.getElementById("nextQuestion");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const startButton = document.getElementById("startJourney");
const bgMusic = document.getElementById("bgMusic");

// =========================
// SHOW SCREEN
// =========================

function showScreen(screen){

    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
    });

    screen.classList.add("active");

}

// =========================
// LOADING
// =========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showScreen(welcomeScreen);

    },3000);

});

// =========================
// START BUTTON
// =========================

const introScreen = document.getElementById("introScreen");
const continueJourney = document.getElementById("continueJourney");

startButton.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    showScreen(introScreen);

});

continueJourney.addEventListener("click",()=>{

    showScreen(quizScreen); currentQuestion=0;
loadQuestion(); nextQuestion.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion<quizData.length){
continueJourney.addEventListener("click",()=>{

    showScreen(quizScreen);

    currentQuestion=0;

    loadQuestion();

}); else{

        showScreen(phoneScreen);

    }

});

});
});

}); const quizData = [

{
    question:"Who is the most beautiful girl? ❤️",
    answers:["Diksha ❤️","Someone Else","Nobody","Don't Know"],
    correct:0
},

{
    question:"Who makes me smile everyday? 😊",
    answers:["Diksha ❤️","Mobile","Friends","Food"],
    correct:0
},

{
    question:"Today's Birthday Queen is? 👑",
    answers:["Diksha ❤️","Me","Nobody","Everyone"],
    correct:0
}

];

let currentQuestion = 0; function loadQuestion(){

    let q = quizData[currentQuestion];

    questionNumber.innerHTML =
    `Question ${currentQuestion+1} of ${quizData.length}`;

    questionText.innerHTML = q.question;

    options.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        let btn = document.createElement("button");

        btn.className="option";

        btn.innerHTML=answer;

        btn.onclick=()=>checkAnswer(index);

        options.appendChild(btn);

    });
 
} function checkAnswer(index){

    if(index===quizData[currentQuestion].correct){

        alert("❤️ Correct!");

    }else{

        alert("😊 Nice Try!");

    }

} 

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const options = document.getElementById("options");acceptCall.addEventListener("click",()=>{

    showScreen(birthdayScreen);

});
declineCall.addEventListener("click",()=>{

    alert("😂 Sorry! You have to accept the call.");

}); cakeBtn.addEventListener("click",()=>{

    alert("🎂 Cake Cut Successfully! ❤️");

});
