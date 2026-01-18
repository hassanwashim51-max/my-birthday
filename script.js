// Navigation
function navigate(page){
    window.location.href = page;
}

// Slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for(let i=0;i<slides.length;i++){slides[i].style.display="none";}
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1;}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
}
if(document.getElementsByClassName("slide").length>0){showSlides();}

// Countdown
let countdownDate = new Date("Jan 27, 2026 00:00:00").getTime();
let countdownEl = document.getElementById("countdown");
if(countdownEl){
    setInterval(function(){
        let now = new Date().getTime();
        let distance = countdownDate - now;
        let days = Math.floor(distance/(1000*60*60*24));
        let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        let seconds = Math.floor((distance%(1000*60))/1000);
        countdownEl.innerHTML = days+"d "+hours+"h "+minutes+"m "+seconds+"s";
    },1000);
}

// Blow Candles
function blowCandles(){
    alert("🎂 Happy Birthday Bubuu! Candles blown 💖");
}

// Falling Hearts
let body = document.body;
for(let i=0;i<30;i++){
    let heart = document.createElement("div");
    heart.innerHTML="❤️";
    heart.style.position="fixed";
    heart.style.fontSize=Math.random()*30+20+"px";
    heart.style.left=Math.random()*window.innerWidth+"px";
    heart.style.top=Math.random()*window.innerHeight+"px";
    body.appendChild(heart);
}
document.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.play();
  }
}, { once: true });
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
