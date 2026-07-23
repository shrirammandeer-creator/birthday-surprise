console.log("Step 3 Loaded ❤️");

setTimeout(() => {

    document.getElementById("loadingScreen").classList.remove("active");

    document.getElementById("welcomeScreen").classList.add("active");

},3000);

document.getElementById("startBtn").addEventListener("click",()=>{

    alert("Perfect! The next step will open the Romantic Quiz ❤️");

});
