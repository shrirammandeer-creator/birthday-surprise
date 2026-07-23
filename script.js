const questions = [
{
question:"❤️ Before we start... Will you stay with me until the end? 🥺",
options:["❤️ Always","💖 Forever","😘 I'm not going anywhere"],
reply:"Aww... I knew I could count on you! ❤️"
},
{
question:"😏 Who is more obsessed with the other?",
options:["😘 You","❤️ Me","💕 Both equally"],
reply:"I think the correct answer is 'Both'! 😄"
},
{
question:"🤭 If I suddenly appeared in front of you right now... what would you do?",
options:["🤗 Hug You","😘 Kiss You","❤️ Never Let You Go"],
reply:"That's exactly what I was hoping for! ❤️"
},
{
question:"👀 What's the first thing you notice about me?",
options:["😊 Smile","❤️ Eyes","🥰 Everything"],
reply:"You're making me blush! 😍"
},
{
question:"😂 Who's more stubborn?",
options:["😅 You","😜 Me","🤝 Both"],
reply:"Let's call it a draw! 😂"
},
{
question:"🌹 If we had a whole day together, what would you choose?",
options:["🍿 Movie Date","🌅 Long Drive","❤️ Just Spend Time Together"],
reply:"Every option sounds perfect with you. ❤️"
},
{
question:"😜 How jealous do you get when someone flirts with me?",
options:["😇 Not at all","😏 A little","😤 Very much"],
reply:"I'll take that as proof you care. ❤️"
},
{
question:"💕 What's your favorite thing about us?",
options:["❤️ Trust","😊 Laughter","🥰 Everything"],
reply:"That's what makes us special."
},
{
question:"🤗 If I asked for one hug...",
options:["❤️ One","🤭 Two","♾️ Unlimited"],
reply:"Unlimited hugs accepted! 🤗❤️"
},
{
question:"😍 Choose a nickname for me.",
options:["❤️ Baby","😘 Jaan","🥰 My Love"],
reply:"I love the sound of that. ❤️"
},
{
question:"🌙 What's our perfect date?",
options:["🌅 Sunset Walk","🍽️ Candlelight Dinner","🎡 Long Drive"],
reply:"Let's make it happen someday."
},
{
question:"📸 If we took a selfie together...",
options:["😊 Cute Smile","😘 Funny Face","❤️ Forehead Touch"],
reply:"That photo would be my favorite."
},
{
question:"❤️ You make me feel...",
options:["😊 Happy","🥰 Safe","💖 Loved"],
reply:"That's the sweetest answer."
},
{
question:"😏 How much do you love me?",
options:["❤️ A Lot","💖 More Every Day","♾️ Infinity"],
reply:"Infinity sounds perfect! ❤️"
},
{
question:"🎂 Ready for your Birthday Surprise?",
options:["🎉 Yes!","❤️ Absolutely!","🥳 Let's Go!"],
reply:"Then let the magic begin... ✨"
}
];

let current = 0;

document.getElementById("start").onclick = () => {
    showQuestion();
};

function showQuestion(){

const q = questions[current];

document.body.innerHTML = `
<div class="quiz">

<h2>Question ${current+1} / ${questions.length}</h2>

<h1>${q.question}</h1>

<div class="options">
<button onclick="choose(0)">${q.options[0]}</button>
<button onclick="choose(1)">${q.options[1]}</button>
<button onclick="choose(2)">${q.options[2]}</button>
</div>

<p id="reply"></p>

</div>
`;

}

function choose(){

document.getElementById("reply").innerHTML =
questions[current].reply;

setTimeout(()=>{

current++;

if(current<questions.length){

showQuestion();

}else{

showBirthday();

}

},1800);

}

function showBirthday(){

document.body.innerHTML=`

<div class="birthday">

<h1>🎉 Happy Birthday 🎉</h1>

<h2>Diksha ❤️</h2>

<p>

You completed my little Love Journey ❤️

Now your real surprise is about to begin...

</p>

<button onclick="alert('Next Step: iPhone Incoming Call 📱')">

Continue ❤️

</button>

</div>

`;

}
