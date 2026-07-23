/*==================================================
    HAPPY BIRTHDAY DIKSHA ❤️
    SCRIPT.JS - PART 1
==================================================*/

/* -----------------------
   SCREEN REFERENCES
----------------------- */

const screens = {
    loading: document.getElementById("loadingScreen"),
    welcome: document.getElementById("welcomeScreen"),
    quiz: document.getElementById("quizScreen"),
    phone: document.getElementById("phoneScreen"),
    birthday: document.getElementById("birthdayScreen"),
    cake: document.getElementById("cakeScreen"),
    gift: document.getElementById("giftScreen"),
    letter: document.getElementById("letterScreen"),
    final: document.getElementById("finalScreen")
};

/* -----------------------
   BUTTONS
----------------------- */

const startBtn = document.getElementById("startJourney");
const acceptCall = document.getElementById("acceptCall");
const declineCall = document.getElementById("declineCall");

const cakeBtn = document.getElementById("cakeBtn");
const giftBtn = document.getElementById("giftBtn");
const letterBtn = document.getElementById("letterBtn");
const fireworkBtn = document.getElementById("fireworkBtn");

/* -----------------------
   QUIZ ELEMENTS
----------------------- */

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const options = document.getElementById("options");
const progressBar = document.getElementById("progressBar");
const replyBox = document.getElementById("replyBox");

/* -----------------------
   MUSIC
----------------------- */

const bgMusic = document.getElementById("bgMusic");

/* -----------------------
   VARIABLES
----------------------- */

let currentQuestion = 0;
let score = 0;

/* -----------------------
   SCREEN FUNCTION
----------------------- */

function showScreen(screen){

    Object.values(screens).forEach(s=>{

        s.classList.remove("active");

    });

    screen.classList.add("active");

}

/* -----------------------
   LOADING SCREEN
----------------------- */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showScreen(screens.welcome);

    },3500);

});

/* -----------------------
   START JOURNEY
----------------------- */

startBtn.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    currentQuestion=0;

    score=0;

    loadQuestion();

    showScreen(screens.quiz);

});

/* -----------------------
   QUESTIONS
----------------------- */

/*==================================================
    SCRIPT.JS - PART 2
    Romantic Questions + Quiz Upgrade
==================================================*/

const questions = [

{
    question:"❤️ Who is the most beautiful girl in my world?",
    options:[
        "Diksha ❤️",
        "Someone else",
        "I don't know",
        "Maybe me 😄"
    ],
    correct:0
},

{
    question:"💕 If we could go anywhere together, where should we go?",
    options:[
        "Beach",
        "Mountains",
        "Anywhere together ❤️",
        "Shopping Mall"
    ],
    correct:2
},

{
    question:"🥰 What makes love stronger?",
    options:[
        "Trust",
        "Care",
        "Respect",
        "All of these ❤️"
    ],
    correct:3
},

{
    question:"😘 Which emoji describes us the best?",
    options:[
        "❤️",
        "💕",
        "💖",
        "All of them"
    ],
    correct:3
},

{
    question:"🎵 Which song should always remind us of each other?",
    options:[
        "Romantic Song",
        "Happy Song",
        "Our Favorite Song ❤️",
        "Dance Song"
    ],
    correct:2
},

{
    question:"🌹 What should I give you every single day?",
    options:[
        "Flowers",
        "Chocolate",
        "Love ❤️",
        "Everything"
    ],
    correct:2
},

{
    question:"💌 What is the most valuable gift?",
    options:[
        "Money",
        "Jewelry",
        "Time & Love ❤️",
        "Phone"
    ],
    correct:2
},

{
    question:"😊 Who always makes me smile?",
    options:[
        "Diksha ❤️",
        "Friends",
        "Movies",
        "Nobody"
    ],
    correct:0
},

{
    question:"🌈 Our relationship should always be filled with...",
    options:[
        "Arguments",
        "Trust",
        "Happiness",
        "Trust + Happiness + Love ❤️"
    ],
    correct:3
},

{
    question:"🎂 Whose birthday is the most special today?",
    options:[
        "Diksha ❤️",
        "Mine",
        "Everyone",
        "Nobody"
    ],
    correct:0
},

{
    question:"💖 What do I love the most?",
    options:[
        "Pizza 🍕",
        "Gaming 🎮",
        "Diksha ❤️",
        "Sleeping 😴"
    ],
    correct:2
},

{
    question:"🌙 If I make one wish tonight...",
    options:[
        "More Money",
        "New Phone",
        "Your Happiness ❤️",
        "Vacation"
    ],
    correct:2
},

{
    question:"🎁 What's inside today's surprise?",
    options:[
        "Love ❤️",
        "Happiness",
        "Memories",
        "All of these"
    ],
    correct:3
},

{
    question:"💍 Which promise should last forever?",
    options:[
        "Always Support",
        "Always Care",
        "Always Love",
        "All Forever ❤️"
    ],
    correct:3
},

{
    question:"❤️ Ready to see your birthday surprise?",
    options:[
        "YES ❤️",
        "Absolutely ❤️",
        "Can't Wait ❤️",
        "Let's Go ❤️"
    ],
    correct:0
];

{
question:"When did we first start talking? ❤️",
options:[
"Our first chat",
"Yesterday 😂",
"I don't remember",
"Never"
],
correct:0
},

{
question:"Who is the cutest? 😘",
options:[
"You ❤️",
"Me 😎",
"Both",
"Our future pet"
],
correct:0
},

{
question:"What makes our bond special? 💖",
options:[
"Love",
"Trust",
"Care",
"All of these"
],
correct:3
},

{
question:"If we travel together, where should we go first? ✈️",
options:[
"Mountains",
"Beach",
"Anywhere together ❤️",
"Paris"
],
correct:2
},

{
question:"What's the best birthday gift? 🎁",
options:[
"Money",
"Flowers",
"Love ❤️",
"Chocolate"
],
correct:2
},

{
question:"Who makes me smile the most? 😊",
options:[
"Diksha ❤️",
"Myself",
"My phone",
"Nobody"
],
correct:0
},

{
question:"Our favorite thing to do? 💕",
options:[
"Talk",
"Travel",
"Laugh",
"Everything together"
],
correct:3
},

{
question:"Which emoji suits us? ❤️",
options:[
"❤️",
"💕",
"💖",
"All"
],
correct:3
},

{
question:"What should never end?",
options:[
"Our memories",
"Our love",
"Our friendship",
"All"
],
correct:3
},

{
question:"Today's queen is... 👑",
options:[
"Diksha ❤️",
"Diksha ❤️",
"Diksha ❤️",
"Obviously Diksha ❤️"
],
correct:3
},

{
question:"Ready for the birthday surprise?",
options:[
"YES ❤️",
"Absolutely ❤️",
"Let's Go ❤️",
"Can't Wait ❤️"
],
correct:0
}

];

/* -----------------------
   LOAD QUESTION
----------------------- */

function loadQuestion(){

    const q=questions[currentQuestion];

    questionText.innerHTML=q.question;

    questionNumber.innerHTML=`Question ${currentQuestion+1} / ${questions.length}`;

    progressBar.style.width=((currentQuestion)/questions.length)*100+"%";

    options.innerHTML="";

    q.options.forEach((option,index)=>{

        const btn=document.createElement("button");

        btn.className="option";

        btn.innerHTML=option;

        btn.onclick=()=>selectAnswer(index);

        options.appendChild(btn);

    });

}

/* -----------------------
   SELECT ANSWER
----------------------- */

function selectAnswer(index){

    if(index===questions[currentQuestion].correct){

        score++;

        replyBox.innerHTML="❤️ Correct!";

    }else{

        replyBox.innerHTML="😊 Nice Try";

    }

    setTimeout(()=>{

        replyBox.innerHTML="";

        currentQuestion++;

        if(currentQuestion<questions.length){

            loadQuestion();

        }else{

            progressBar.style.width="100%";

            showScreen(screens.phone);

        }

    },1200);

}

/* -----------------------
   PHONE SCREEN
----------------------- */

acceptCall.addEventListener("click",()=>{

    showScreen(screens.birthday);

});

declineCall.addEventListener("click",()=>{

    alert("No no 😄... You have to answer the birthday call!");

});
/*==================================================
    SCRIPT.JS - PART 3A
    Phone Call + Birthday Screen + Balloons
==================================================*/

/* -----------------------
   PHONE RINGTONE
----------------------- */

const ringtone = new Audio(
    "assets/music/ringtone.mp3"
);

ringtone.loop = true;

/* -----------------------
   PHONE VIBRATION
----------------------- */

function startPhoneAnimation(){

    ringtone.play().catch(()=>{});

    const phone = document.querySelector(".phone");

    phone.classList.add("ringing");

}

/* -----------------------
   STOP PHONE
----------------------- */

function stopPhoneAnimation(){

    ringtone.pause();

    ringtone.currentTime = 0;

    const phone = document.querySelector(".phone");

    phone.classList.remove("ringing");

}

/* -----------------------
   OPEN PHONE SCREEN
----------------------- */

function openPhoneScreen(){

    showScreen(screens.phone);

    startPhoneAnimation();

}

/* -----------------------
   UPDATE QUIZ END
----------------------- */

/* Replace this line inside selectAnswer()

showScreen(screens.phone);

WITH

openPhoneScreen();

*/

/* -----------------------
   ACCEPT CALL
----------------------- */

acceptCall.addEventListener("click",()=>{

    stopPhoneAnimation();

    showScreen(screens.birthday);

    launchBalloons();

});

/* -----------------------
   DECLINE CALL
----------------------- */

declineCall.addEventListener("click",()=>{

    alert("😂 Nice try!\nYou must answer my birthday call ❤️");

});

/* -----------------------
   BALLOONS
----------------------- */

function launchBalloons(){

    for(let i=0;i<25;i++){

        createBalloon();

    }

}

/* -----------------------
   CREATE BALLOON
----------------------- */

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML="🎈";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.fontSize=(30+Math.random()*35)+"px";

    balloon.style.animationDuration=
        (6+Math.random()*5)+"s";

    document.body.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },12000);

}

/* -----------------------
   BIRTHDAY BUTTON
----------------------- */

cakeBtn.addEventListener("click",()=>{

    showScreen(screens.cake);

});

/* -----------------------
   CONFETTI
----------------------- */

function launchConfetti(){

    for(let i=0;i<100;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDuration=
            (3+Math.random()*3)+"s";

        piece.style.transform=
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6000);

    }

}

/* -----------------------
   AUTO CONFETTI
----------------------- */

setInterval(()=>{

    if(
        screens.birthday.classList.contains("active")
    ){

        launchConfetti();

    }

},4000);
