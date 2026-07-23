/*==================================================
      HAPPY BIRTHDAY DIKSHA ❤️
      SCRIPT.JS - PART 1
==================================================*/

/* ===========================
SCREEN REFERENCES
=========================== */

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

/* ===========================
BUTTONS
=========================== */

const startBtn = document.getElementById("startJourney");
const acceptBtn = document.getElementById("acceptCall");
const declineBtn = document.getElementById("declineCall");

const cakeBtn = document.getElementById("cakeBtn");
const giftBtn = document.getElementById("giftBtn");
const letterBtn = document.getElementById("letterBtn");
const finishBtn = document.getElementById("fireworkBtn");

/* ===========================
OTHER ELEMENTS
=========================== */

const bgMusic = document.getElementById("bgMusic");
const loadingProgress = document.getElementById("loadingProgress");

/* ===========================
QUIZ ELEMENTS
=========================== */

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const progressBar = document.getElementById("progressBar");
const replyBox = document.getElementById("replyBox");

const letterText = document.getElementById("letterText");

/* ===========================
VARIABLES
=========================== */

let currentQuestion = 0;
let score = 0;

/* ===========================
SHOW SCREEN
=========================== */

function showScreen(screen){

    Object.values(screens).forEach(item=>{

        item.classList.remove("active");

    });

    screen.classList.add("active");

}

/* ===========================
LOADING SCREEN
=========================== */

window.addEventListener("load",()=>{

    let progress=0;

    const loader=setInterval(()=>{

        progress+=2;

        loadingProgress.style.width=progress+"%";

        if(progress>=100){

            clearInterval(loader);

            setTimeout(()=>{

                showScreen(screens.welcome);

            },500);

        }

    },60);

});

/* ===========================
BACKGROUND MUSIC
=========================== */

function playMusic(){

    if(!bgMusic) return;

    bgMusic.volume=0.5;

    bgMusic.play().catch(()=>{});

}

document.addEventListener("click",playMusic,{once:true});

/* ===========================
START JOURNEY
=========================== */

startBtn.addEventListener("click",()=>{

    currentQuestion=0;

    score=0;

    loadQuestion();

    showScreen(screens.quiz);

});

/* ===========================
UTILITY
=========================== */

function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

} /*==================================================
      HAPPY BIRTHDAY DIKSHA ❤️
      SCRIPT.JS - PART 2
      Romantic Quiz
==================================================*/

/* ===========================
ROMANTIC QUESTIONS
=========================== */

const questions = [

{
    question:"❤️ Who is the most beautiful girl in my life?",
    options:[
        "Diksha ❤️",
        "Someone Else",
        "I Don't Know",
        "Everyone"
    ],
    correct:0
},

{
    question:"💕 What is the strongest part of our relationship?",
    options:[
        "Trust ❤️",
        "Arguments",
        "Distance",
        "Luck"
    ],
    correct:0
},

{
    question:"🌹 What should I give you every day?",
    options:[
        "Flowers",
        "Chocolate",
        "Love ❤️",
        "Money"
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
        "Pizza",
        "Gaming",
        "Diksha ❤️",
        "Sleeping"
    ],
    correct:2
},

{
    question:"🌈 Our relationship should always have...",
    options:[
        "Trust",
        "Love",
        "Happiness",
        "All of these ❤️"
    ],
    correct:3
},

{
    question:"💌 The most valuable gift is...",
    options:[
        "Money",
        "Jewellery",
        "Time & Love ❤️",
        "Phone"
    ],
    correct:2
},

{
    question:"🎁 What's inside today's surprise?",
    options:[
        "Love ❤️",
        "Memories",
        "Happiness",
        "All of these ❤️"
    ],
    correct:3
},

{
    question:"💍 Which promise should last forever?",
    options:[
        "Support",
        "Care",
        "Love",
        "All Forever ❤️"
    ],
    correct:3
},

{
    question:"🌙 My biggest wish is...",
    options:[
        "New Phone",
        "More Money",
        "Your Happiness ❤️",
        "Vacation"
    ],
    correct:2
},

{
    question:"🥰 Who is my favorite person?",
    options:[
        "Diksha ❤️",
        "Nobody",
        "Friends",
        "Family"
    ],
    correct:0
},

{
    question:"💕 What makes every day beautiful?",
    options:[
        "Your Smile ❤️",
        "Weather",
        "Music",
        "Food"
    ],
    correct:0
},

{
    question:"❤️ Are you ready for your birthday surprise?",
    options:[
        "YES ❤️",
        "Absolutely ❤️",
        "Let's Go ❤️",
        "Can't Wait ❤️"
    ],
    correct:0
},

{
    question:"🎉 Shall we celebrate together?",
    options:[
        "YES ❤️",
        "Of Course ❤️",
        "Always ❤️",
        "Forever ❤️"
    ],
    correct:0
}];

/* ===========================
LOAD QUESTION
=========================== */

function loadQuestion(){

    const q = questions[currentQuestion];

    questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;

    questionText.textContent =
    q.question;

    progressBar.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

    options.innerHTML = "";

    q.options.forEach((option,index)=>{

        const btn =
        document.createElement("button");

        btn.className = "option";

        btn.textContent = option;

        btn.onclick = ()=>selectAnswer(index);

        options.appendChild(btn);

    });

}

/* ===========================
SELECT ANSWER
=========================== */

function selectAnswer(index){

    const current =
    questions[currentQuestion];

    if(index===current.correct){

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

            openPhoneScreen();

        }

    },1000);

}

/* ===========================
PHONE SCREEN
=========================== */

function openPhoneScreen(){

    showScreen(screens.phone);

    document.querySelector(".phone")
    .classList.add("ringing");

}

console.log("❤️ Script Part 2 Loaded"); /*==================================================
      HAPPY BIRTHDAY DIKSHA ❤️
      SCRIPT.JS - PART 3
      Phone • Birthday • Cake • Gift
==================================================*/

/* ===========================
PHONE CALL
=========================== */

const phone = document.querySelector(".phone");

function startPhoneRing(){

    if(phone){

        phone.classList.add("ringing");

    }

}

function stopPhoneRing(){

    if(phone){

        phone.classList.remove("ringing");

    }

}

/* ===========================
ACCEPT CALL
=========================== */

acceptBtn.addEventListener("click",()=>{

    stopPhoneRing();

    launchBalloons();

    launchConfetti();

    showScreen(screens.birthday);

});

/* ===========================
DECLINE CALL
=========================== */

declineBtn.addEventListener("click",()=>{

    alert("😄 Nice try!\nYou have to answer my birthday call ❤️");

});

/* ===========================
BIRTHDAY BUTTON
=========================== */

cakeBtn.addEventListener("click",()=>{

    showScreen(screens.cake);

});

/* ===========================
BALLOONS
=========================== */

function launchBalloons(){

    for(let i=0;i<25;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML="🎈";

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.fontSize=(35+Math.random()*35)+"px";

        balloon.style.animationDuration=
        (6+Math.random()*4)+"s";

        document.body.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },10000);

    }

}

/* ===========================
CONFETTI
=========================== */

function launchConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (3+Math.random()*3)+"s";

        confetti.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

/* ===========================
CAKE
=========================== */

const cake=document.querySelector(".cake");

let cakeCut=false;

if(cake){

cake.addEventListener("click",()=>{

    if(cakeCut) return;

    cakeCut=true;

    cake.classList.add("cakeCut");

    cake.innerHTML="🍰";

    replyBox.innerHTML="🎉 Happy Birthday Diksha ❤️";

    launchConfetti();

    setTimeout(()=>{

        replyBox.innerHTML="";

    },2000);

});

}

/* ===========================
OPEN GIFT
=========================== */

giftBtn.addEventListener("click",()=>{

    showScreen(screens.gift);

});

const gift=document.querySelector(".gift");

if(gift){

gift.addEventListener("click",()=>{

    gift.innerHTML="💖";

    gift.classList.add("giftBounce");

    launchConfetti();

});

}

/* ===========================
LOVE LETTER
=========================== */

letterBtn.addEventListener("click",()=>{

    showScreen(screens.letter);

    startLetter();

});

/* ===========================
LETTER MESSAGE
=========================== */

const message=`My Dearest Diksha ❤️

Happy Birthday to the most beautiful person in my life.

I hope this birthday brings you endless happiness, beautiful memories, success, peace, and lots of smiles.

Thank you for being such an important part of my life.

May all your dreams come true.

Always remember that you are special, loved, and appreciated.

❤️ Happy Birthday Once Again ❤️

With Lots of Love ❤️`;

let letterIndex=0;

function startLetter(){

    letterText.innerHTML="";

    letterIndex=0;

    typeLetter();

}

function typeLetter(){

    if(letterIndex<message.length){

        letterText.innerHTML+=message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,35);

    }

}

console.log("❤️ Script Part 3 Loaded"); /*==================================================
      HAPPY BIRTHDAY DIKSHA ❤️
      SCRIPT.JS - PART 4
      Final Celebration
==================================================*/

/* ===========================
FINISH BUTTON
=========================== */

finishBtn.addEventListener("click",()=>{

    showScreen(screens.final);

    launchFinalEffects();

});

/* ===========================
FIREWORKS
=========================== */

const fireworks =
document.getElementById("fireworks");

let fireworkInterval;

function createFirework(){

    if(!fireworks) return;

    const firework =
    document.createElement("div");

    firework.className="firework";

    firework.style.left =
    Math.random()*100+"vw";

    firework.style.top =
    (10+Math.random()*60)+"vh";

    for(let i=0;i<30;i++){

        const particle =
        document.createElement("span");

        particle.className="particle";

        particle.style.setProperty(
            "--x",
            (Math.random()-0.5)*250+"px"
        );

        particle.style.setProperty(
            "--y",
            (Math.random()-0.5)*250+"px"
        );

        firework.appendChild(particle);

    }

    fireworks.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1800);

}

function startFireworks(){

    createFirework();

    fireworkInterval = setInterval(()=>{

        createFirework();

    },700);

}

function stopFireworks(){

    clearInterval(fireworkInterval);

}

/* ===========================
HEART RAIN
=========================== */

function startHeartRain(){

    const interval = setInterval(()=>{

        if(!screens.final.classList.contains("active")){

            clearInterval(interval);

            return;

        }

        const heart =
        document.createElement("div");

        heart.className="heartRain";

        heart.innerHTML="❤️";

        heart.style.left=
        Math.random()*100+"vw";

        heart.style.fontSize=
        (18+Math.random()*30)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },300);

}

/* ===========================
STAR SHOWER
=========================== */

function startStars(){

    const interval = setInterval(()=>{

        if(!screens.final.classList.contains("active")){

            clearInterval(interval);

            return;

        }

        const star =
        document.createElement("div");

        star.className="starParticle";

        star.innerHTML="✨";

        star.style.left=
        Math.random()*100+"vw";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },5000);

    },350);

}

/* ===========================
ROSE RAIN
=========================== */

function startRoseRain(){

    const interval = setInterval(()=>{

        if(!screens.final.classList.contains("active")){

            clearInterval(interval);

            return;

        }

        const rose =
        document.createElement("div");

        rose.className="roseRain";

        rose.innerHTML="🌹";

        rose.style.left=
        Math.random()*100+"vw";

        document.body.appendChild(rose);

        setTimeout(()=>{

            rose.remove();

        },7000);

    },450);

}

/* ===========================
FINAL EFFECTS
=========================== */

function launchFinalEffects(){

    startFireworks();

    startHeartRain();

    startStars();

    startRoseRain();

}

/* ===========================
REPLAY BUTTON
=========================== */

const replayButton =
document.createElement("button");

replayButton.innerHTML =
"❤️ Replay Surprise";

replayButton.style.marginTop="40px";

replayButton.onclick=()=>{

    stopFireworks();

    location.reload();

};

const finalCard =
document.querySelector("#finalScreen .glass");

if(finalCard){

    finalCard.appendChild(replayButton);

}

/* ===========================
AUTO PLAY MUSIC
=========================== */

document.addEventListener("click",()=>{

    if(bgMusic){

        bgMusic.play().catch(()=>{});

    }

},{once:true});

/* ===========================
BACKGROUND EFFECTS
=========================== */

setInterval(()=>{

    const container =
    document.getElementById("hearts");

    if(!container) return;

    const heart =
    document.createElement("div");

    heart.className="heart";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.animationDuration=
    (6+Math.random()*5)+"s";

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

},350);

/* Sparkles */

setInterval(()=>{

    const container =
    document.getElementById("sparkles");

    if(!container) return;

    const sparkle =
    document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=
    Math.random()*100+"vw";

    sparkle.style.top=
    Math.random()*100+"vh";

    sparkle.style.animationDuration=
    (2+Math.random()*3)+"s";

    container.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },5000);

},250);

/* Petals */

setInterval(()=>{

    const container =
    document.getElementById("petals");

    if(!container) return;

    const petal =
    document.createElement("div");

    petal.className="petal";

    petal.style.left=
    Math.random()*100+"vw";

    petal.style.animationDuration=
    (8+Math.random()*5)+"s";

    container.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

},900);

console.log("❤️ Happy Birthday Diksha Website Loaded Successfully ❤️");

console.log("❤️ Script Part 1 Loaded");
