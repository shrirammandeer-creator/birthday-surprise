*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(135deg,#ff5f9e,#ff9a8b);

overflow:hidden;

}

.welcome{

text-align:center;

color:white;

animation:fade 1.5s ease;

}

.logo{

font-size:70px;

margin-bottom:20px;

animation:bounce 2s infinite;

}

h1{

font-size:60px;

margin-bottom:20px;

}

p{

font-size:24px;

margin-bottom:40px;

}

button{

padding:18px 55px;

font-size:22px;

border:none;

border-radius:50px;

background:white;

color:#ff4f81;

cursor:pointer;

font-weight:bold;

transition:.3s;

}

button:hover{

transform:scale(1.08);

}

@keyframes fade{

from{
opacity:0;
transform:translateY(50px);
}

to{
opacity:1;
transform:translateY(0);
}

}

@keyframes bounce{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-10px);
}

}
