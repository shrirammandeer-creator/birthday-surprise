document.getElementById("start").addEventListener("click", function () {

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ff4d6d,#ff8fab);
font-family:Poppins,sans-serif;
color:white;
flex-direction:column;
text-align:center;
">

<h1 style="font-size:50px;">❤️ Question 1 of 15 ❤️</h1>

<p style="font-size:28px;margin-top:20px;">
Will you stay with me until the end of this surprise?
</p>

<button id="nextBtn" style="
margin-top:40px;
padding:18px 40px;
font-size:22px;
border:none;
border-radius:50px;
cursor:pointer;
background:white;
color:#ff4d6d;
font-weight:bold;
">
❤️ I Promise
</button>

</div>

`;

document.getElementById("nextBtn").addEventListener("click", function () {
    alert("Perfect! Now we'll move to Question 2.");
});

});
