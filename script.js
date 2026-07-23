/* ===========================================
   HAPPY BIRTHDAY DIKSHA ❤️
   JavaScript Part 1
=========================================== */

// All screens
const screens = document.querySelectorAll(".screen");

// Helper function to show a screen
function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    showScreen("loadingScreen");

    setTimeout(() => {
        showScreen("welcomeScreen");
    }, 3000);

});

// ==========================
// BUTTONS
// ==========================

document.getElementById("startJourney").addEventListener("click", () => {

    showScreen("introScreen");

});

document.getElementById("continueJourney").addEventListener("click", () => {

    showScreen("quizScreen");

}); /* ===========================================
   JavaScript Part 2
   QUIZ SYSTEM
=========================================== */

const quiz = [
    {
        question: "When did we first meet? ❤️",
        options: [
            "At school",
            "Online",
            "At college",
            "At a party"
        ],
        reply: "Every moment since then has been my favorite memory. ❤️"
    },
    {
        question: "Who is the cutest? 🥰",
        options: [
            "Me 😎",
            "You ❤️",
            "Both",
            "Can't Decide"
        ],
        reply: "Correct answer: You! 😍"
    },
    {
        question: "What makes your smile special? 😊",
        options: [
            "It lights my world",
            "It's magical",
            "It's adorable",
            "All of the above"
        ],
        reply: "Your smile is my favorite view. ❤️"
    }
];

let currentQuestion = 0;

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const replyBox = document.getElementById("replyBox");
const progressBar = document.getElementById("progressBar");

function loadQuestion() {

    const q = quiz[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${quiz.length}`;

    questionText.textContent = q.question;

    replyBox.textContent = "";

    progressBar.style.width =
        ((currentQuestion) / quiz.length) * 100 + "%";

    optionsBox.innerHTML = "";

    q.options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "option";

        btn.textContent = option;

        btn.onclick = () => answerQuestion(q.reply);

        optionsBox.appendChild(btn);

    });

}

function answerQuestion(reply) {

    replyBox.textContent = reply;

    progressBar.style.width =
        ((currentQuestion + 1) / quiz.length) * 100 + "%";

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quiz.length) {

            loadQuestion();

        } else {

            showScreen("phoneScreen");

        }

    }, 1800);

}

loadQuestion(); /* ===========================================
   JavaScript Part 3
   PHONE SCREEN
=========================================== */

const acceptCall = document.getElementById("acceptCall");
const declineCall = document.getElementById("declineCall");

// Accept Call
acceptCall.addEventListener("click", () => {

    showScreen("birthdayScreen");

});

// Decline Call
declineCall.addEventListener("click", () => {

    alert("😄 Nice try! You have to answer the birthday call ❤️");

});

// Optional ringing effect
const callerImage = document.querySelector(".callerImage");

setInterval(() => {

    if (document.getElementById("phoneScreen").classList.contains("active")) {

        callerImage.style.transform = "scale(1.08)";

        setTimeout(() => {
            callerImage.style.transform = "scale(1)";
        }, 250);

    }

}, 1200); /* ===========================================
   JavaScript Part 4
   BIRTHDAY • CAKE • GIFT • LETTER
=========================================== */

const cake = document.querySelector(".cake");
const gift = document.querySelector(".gift");
const nextLetter = document.getElementById("nextLetter");

// ==========================
// CAKE
// ==========================

cake.addEventListener("click", () => {

    cake.innerHTML = "🧁";

    alert("🎉 Happy Birthday Diksha! Make a beautiful wish! ❤️");

    setTimeout(() => {

        showScreen("giftScreen");

    }, 1800);

});

// ==========================
// GIFT
// ==========================

gift.addEventListener("click", () => {

    gift.innerHTML = "💖";

    setTimeout(() => {

        showScreen("letterScreen");

    }, 1200);

});

// ==========================
// LETTER
// ==========================

nextLetter.addEventListener("click", () => {

    showScreen("finalScreen");

}); /* ===========================================
   JavaScript Part 5
   MAGICAL BACKGROUND EFFECTS
===========================================*/

// Create floating elements
function createFloating(containerId, emoji, interval) {

    const container = document.getElementById(containerId);

    setInterval(() => {

        const item = document.createElement("div");

        item.innerHTML = emoji;

        item.style.position = "absolute";
        item.style.left = Math.random() * 100 + "%";
        item.style.top = "100%";
        item.style.fontSize = (18 + Math.random() * 24) + "px";
        item.style.opacity = Math.random() * 0.5 + 0.5;
        item.style.pointerEvents = "none";
        item.style.transition = "transform 8s linear, opacity 8s linear";

        container.appendChild(item);

        requestAnimationFrame(() => {

            item.style.transform =
                `translate(${(Math.random()-0.5)*200}px,-120vh) rotate(${Math.random()*720}deg)`;

            item.style.opacity = "0";

        });

        setTimeout(() => {

            item.remove();

        }, 8000);

    }, interval);

}

// Floating Hearts ❤️
createFloating("hearts", "❤️", 700);

// Flower Petals 🌸
createFloating("petals", "🌸", 900);

// Flying Kisses 💋
createFloating("kisses", "💋", 1400);  /* ===========================================
   JavaScript Part 6
   FINAL PREMIUM EFFECTS
=========================================== */

// ----------------------------
// Typewriter Effect
// ----------------------------

const letterElement = document.getElementById("letterText");

const originalLetter = letterElement.innerHTML;

letterElement.innerHTML = "";

let typingStarted = false;

function typeLetter() {

    if (typingStarted) return;

    typingStarted = true;

    let index = 0;

    function type() {

        if (index < originalLetter.length) {

            letterElement.innerHTML += originalLetter.charAt(index);

            index++;

            setTimeout(type, 30);

        }

    }

    type();

}

// Start typing when Letter Screen opens
const oldShowScreen = showScreen;

showScreen = function(id){

    oldShowScreen(id);

    if(id === "letterScreen"){

        letterElement.innerHTML = "";

        typingStarted = false;

        typeLetter();

    }

};

// ----------------------------
// Button Click Animation
// ----------------------------

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {transform:"scale(1)"},

            {transform:"scale(0.92)"},

            {transform:"scale(1)"}

        ],{

            duration:180

        });

    });

});

// ----------------------------
// Floating Glow
// ----------------------------

setInterval(()=>{

    document.body.style.filter =
        "brightness("+(0.97+Math.random()*0.06)+")";

},1200);

// ----------------------------
// Final Screen Animation
// ----------------------------

const finalTitle = document.querySelector("#finalScreen h1");

setInterval(()=>{

    if(document.getElementById("finalScreen").classList.contains("active")){

        finalTitle.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.05)"},

            {transform:"scale(1)"}

        ],{

            duration:1200

        });

    }

},1500); 
