const questions = [
"❤️ Will you stay with me until the end of this surprise?",
"😊 What was your first impression of me?",
"🥰 What's your favorite memory with me?",
"💖 What is one thing about me that always makes you smile?",
"🌍 If we could travel anywhere together, where would you go?",
"💌 What's one thing you've always wanted to tell me?",
"🌙 Would you rather watch the stars or sunrise with me?",
"🌸 What's your favorite thing about us?",
"🎵 Which song reminds you of us?",
"❤️ When you miss me, what do you miss the most?",
"✨ What's your dream date with me?",
"💕 Do you believe we were meant to meet?",
"🤗 Will you keep making memories with me?",
"♾️ How much do you love me?",
"🎁 Are you ready for your Birthday Surprise?"
];

let current = 0;

document.getElementById("start").onclick = showQuestion;

function showQuestion(){

renderQuestion();

}

function renderQuestion(){

document.body.innerHTML = `

<div class="quiz">

<div class="progressBox">

<div class="progress">

<div class="fill" style="width:${((current+1)/questions.length)*100}%"></div>

</div>

<p>${current+1} / ${questions.length}</p>

</div>

<h1>❤️ Love Journey ❤️</h1>

<p>${questions[current]}</p>

<button id="next">
${current==questions.length-1 ? "🎉 Show Surprise" : "Next ❤️"}
</button>

</div>

`;

document.getElementById("next").onclick=()=>{

current++;

if(current<questions.length){

renderQuestion();

}else{

showBirthday();

}

}

}

function showBirthday(){

document.body.innerHTML=`

<div class="birthday">

<h1>🎉 HAPPY BIRTHDAY 🎉</h1>

<h2>Diksha ❤️</h2>

<p>

You completed the Love Journey.

Now your real surprise begins...

</p>

<button id="continue">

Continue ❤️

</button>

</div>

`;

}
