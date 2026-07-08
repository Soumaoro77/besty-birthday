/* ==========================================
        BESTY ULTRA PREMIUM V3
========================================== */

const loader = document.getElementById("loader");
const giftSection = document.getElementById("giftSection");
const openGiftBtn = document.getElementById("openGift");
const mainCard = document.getElementById("mainCard");
const music = document.getElementById("music");
const endingBtn = document.getElementById("endingBtn");
const restartBtn = document.getElementById("restartBtn");

/* ===========================
        LOADER
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 3500);

});

/* ===========================
        OUVERTURE DU CADEAU
=========================== */

openGiftBtn.addEventListener("click", openGift);

function openGift() {

    document.getElementById("gift").style.transform =
        "scale(0.8) rotateY(720deg)";

    setTimeout(() => {

        giftSection.style.display = "none";

        mainCard.style.display = "block";

        music.play().catch(() => {});

        startCountdown();

        typeLetter();

        createHearts();

        createStars();

        createRoses();

        endingBtn.style.display = "inline-block";

    }, 1500);

}

/* ===========================
      COMPTE A REBOURS
=========================== */

function startCountdown() {

    const target = new Date("2026-08-10T00:00:00").getTime();

    setInterval(() => {

        const now = Date.now();

        const diff = target - now;

        if (diff <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }

        const days = Math.floor(diff / 86400000);

        const hours = Math.floor((diff % 86400000) / 3600000);

        const minutes = Math.floor((diff % 3600000) / 60000);

        const seconds = Math.floor((diff % 60000) / 1000);

        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    }, 1000);

}
/* ==========================================
        LETTRE (MACHINE À ÉCRIRE)
========================================== */

const letter = `💖 Maïmouna Samaké 💖

Aujourd'hui, le monde entier semble s'arrêter pour toi.

Les étoiles brillent plus fort,
les vents murmurent ton prénom,
et chaque seconde devient une célébration de ta lumière.

✨ Que tes rêves s'élèvent comme des constellations infinies.

✨ Que ton sourire illumine les cœurs autour de toi.

✨ Que ton chemin soit rempli de bonheur,
de réussite,
de paix
et d'amour.

Tu es une personne précieuse très pour moi.

Je n'ai peut-être pas grand-chose à t'offrir aujourd'hui...

Mais Inshallah.

Certaines de ces paroles ne viennent peut-être pas exactement de l'endroit où elles devraient venir...

Mais elles sont sincères.

Chaque mot a été saisi avec le cœur.

Merci d'être toi.

🌹 Joyeux Anniversaire Ma besty d'amour 🌹

🌹 Cœur D'or ❤️.
    
❤️ Bron ❤️`;

function typeLetter(){

    const box = document.getElementById("typingText");

    box.innerHTML = "";

    let i = 0;

    function write(){

        if(i < letter.length){

            if(letter[i] === "\n"){

                box.innerHTML += "<br>";

            }else{

                box.innerHTML += letter[i];

            }

            i++;

            box.scrollTop = box.scrollHeight;

            setTimeout(write,35);

        }

    }

    write();

}

/* ==========================================
            COEURS
========================================== */

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["💖","💗","💕","❤️"][Math.floor(Math.random()*4)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        document.getElementById("floatingHearts").appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },400);

}

/* ==========================================
            ROSES
========================================== */

function createRoses(){

    setInterval(()=>{

        const rose=document.createElement("div");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"vw";

        rose.style.fontSize=(20+Math.random()*20)+"px";

        rose.style.animationDuration=(7+Math.random()*3)+"s";

        document.getElementById("floatingRoses").appendChild(rose);

        setTimeout(()=>{

            rose.remove();

        },10000);

    },1200);

}

/* ==========================================
            ETOILES
========================================== */

function createStars(){

    setInterval(()=>{

        const star=document.createElement("div");

        star.className="starParticle";

        star.innerHTML=["⭐","✨","🌟","💫"][Math.floor(Math.random()*4)];

        star.style.left=Math.random()*100+"vw";

        star.style.fontSize=(15+Math.random()*20)+"px";

        star.style.animationDuration=(6+Math.random()*4)+"s";

        document.getElementById("floatingStars").appendChild(star);

        setTimeout(()=>{

            star.remove();

        },9000);

    },700);

}
/* ==========================================
        FEUX D'ARTIFICE
========================================== */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function firework(x, y) {

    for (let i = 0; i < 80; i++) {

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 10,

            dy: (Math.random() - 0.5) * 10,

            life: 100,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.x += p.dx;

        p.y += p.dy;

        p.dy += 0.03;

        p.life--;

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(()=>{

    firework(

        Math.random()*canvas.width,

        Math.random()*canvas.height*0.5

    );

},1500);

/* ==========================================
        FIN CINEMATOGRAPHIQUE
========================================== */

endingBtn.addEventListener("click",showEnding);

function showEnding(){

    const screen=document.getElementById("endingScreen");

    const text=document.getElementById("endingText");

    screen.style.visibility="visible";

    screen.style.opacity="1";

    const messages=[

"💖 Merci d'avoir pris le temps de lire cette lettre... 💖",

"Tu es une personne exceptionnelle.",

"Ne doute jamais de ta valeur.",

"Continue toujours à sourire.",

"Que Dieu te protège chaque jour.",

"Que tous tes rêves deviennent réalité.",

"🌹 Joyeux Anniversaire Besty 🌹",

"❤️ Bron ❤️"

];

let i=0;

function next(){

    if(i>=messages.length){

        launchFinalCelebration();
return;

    }

    text.innerHTML=messages[i];

    i++;

    setTimeout(next,3500);

}

next();

}

/* ==========================================
        RECOMMENCER
========================================== */

restartBtn.addEventListener("click",()=>{

    location.reload();

});
/* ==========================================
        PARTIE 4 - EFFETS PREMIUM
========================================== */

/* ========= ETOILES FILANTES ========= */

function shootingStar(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.top="-40px";
    star.style.fontSize=(10+Math.random()*18)+"px";
    star.style.zIndex="9999";
    star.style.pointerEvents="none";

    document.body.appendChild(star);

    let x=parseFloat(star.style.left);
    let y=-40;

    const move=setInterval(()=>{

        x-=8;
        y+=8;

        star.style.left=x+"px";
        star.style.top=y+"px";
        star.style.opacity=1-y/window.innerHeight;

        if(y>window.innerHeight){

            clearInterval(move);

            star.remove();

        }

    },20);

}

setInterval(shootingStar,4000);

/* ========= CONFETTIS ========= */

function createConfetti(){

    const confetti=document.createElement("div");

    confetti.innerHTML=["🎉","🎊","✨","💛"][Math.floor(Math.random()*4)];

    confetti.style.position="fixed";

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.top="-50px";

    confetti.style.fontSize=(15+Math.random()*18)+"px";

    confetti.style.pointerEvents="none";

    confetti.style.zIndex="99999";

    document.body.appendChild(confetti);

    let y=-50;

    const fall=setInterval(()=>{

        y+=4;

        confetti.style.top=y+"px";

        confetti.style.transform=`rotate(${y*3}deg)`;

        confetti.style.opacity=1-y/window.innerHeight;

        if(y>window.innerHeight){

            clearInterval(fall);

            confetti.remove();

        }

    },20);

}

setInterval(createConfetti,500);

/* ========= FONDU DE LA MUSIQUE ========= */

function fadeMusic(){

    let volume=1;

    const fade=setInterval(()=>{

        volume-=0.05;

        if(volume<=0){

            music.pause();

            music.volume=1;

            clearInterval(fade);

            return;

        }

        music.volume=volume;

    },250);

}

/* ========= BOUGIES ========= */

document.querySelectorAll(".candles span").forEach(candle=>{

    candle.addEventListener("click",()=>{

        candle.style.opacity=".3";

        candle.style.transform="scale(.9)";

        if(candle.querySelector(".flame")){

            candle.querySelector(".flame").remove();

        }

    });

});

/* ========= FIN ========= */

restartBtn.addEventListener("click",()=>{

    location.reload();

});
/* ==========================================
        PARTIE 5 - FINAL LUXURY
========================================== */

function launchFinalCelebration(){

    fadeMusic();

    goldenRain();

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            firework(
                Math.random()*canvas.width,
                Math.random()*canvas.height*0.5
            );

        },i*300);

    }

}

function goldenRain(){

    setInterval(()=>{

        const star=document.createElement("div");

        star.innerHTML="⭐";

        star.style.position="fixed";
        star.style.left=Math.random()*100+"vw";
        star.style.top="-40px";
        star.style.fontSize=(12+Math.random()*20)+"px";
        star.style.pointerEvents="none";
        star.style.zIndex="999999";

        document.body.appendChild(star);

        let y=-40;

        const fall=setInterval(()=>{

            y+=4;

            star.style.top=y+"px";

            star.style.transform=`rotate(${y*4}deg)`;

            star.style.opacity=1-y/window.innerHeight;

            if(y>window.innerHeight){

                clearInterval(fall);

                star.remove();

            }

        },20);

    },180);

}

/* ========= REJOUER ========= */

restartBtn.addEventListener("click",()=>{

    window.scrollTo(0,0);

    location.reload();

});

/* ========= MESSAGE FINAL ========= */

console.log("🎉 Besty Birthday Ultra Premium chargé avec succès !");
// Positionner les 13 photos en cercle
const carousel = document.getElementById("carousel");
const items = carousel.querySelectorAll(".item");
const angle = 360 / items.length;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${angle * index}deg) translateZ(350px)`;
});
// Positionner les vidéos en cercle
const videoCarousel = document.getElementById("videoCarousel");
const videoItems = videoCarousel.querySelectorAll(".video-item");
const angleVideo = 360 / videoItems.length;

videoItems.forEach((item, index) => {
  item.style.transform = `rotateY(${angleVideo * index}deg) translateZ(500px)`;
});

// Fonction pour détecter la vidéo visible
function updateVideos() {
  const rotation = (Date.now() / 100) % 360; // angle actuel
  let visibleIndex = Math.round(rotation / angleVideo) % videoItems.length;

  videoItems.forEach((item, index) => {
    const vid = item.querySelector("video");
    if (index === visibleIndex) {
      if (vid.paused) vid.play(); // joue seulement la vidéo visible
    } else {
      vid.pause(); // pause les autres
    }
  });
}

// Vérifier toutes les 500ms
setInterval(updateVideos, 500);
// Détection mobile
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

// Paramètres par défaut (PC)
let heartInterval = 300;   // fréquence des cœurs
let maxParticles = 80;     // particules feux d’artifice
let rotationSpeedPhotos = "30s"; // vitesse carrousel photos
let rotationSpeedVideos = "40s"; // vitesse carrousel vidéos

// Mode mobile : allégé
if (isMobile) {
  heartInterval = 800;       // moins de cœurs
  maxParticles = 30;         // moins de particules
  rotationSpeedPhotos = "60s"; // rotation plus lente
  rotationSpeedVideos = "70s"; // rotation plus lente
}

// Exemple d’utilisation dans ton code existant
// Feux d’artifice
function startFireworks() {
  let particles = [];
  for (let i = 0; i < maxParticles; i++) {
    particles.push(/* ... création particule ... */);
  }
  // reste du code...
}

// Cœurs flottants
setInterval(() => {
  createHeart(); // ta fonction qui génère un cœur
}, heartInterval);

// Carrousel photos
document.querySelector(".carousel").style.animation = `rotate ${rotationSpeedPhotos} infinite linear`;

// Carrousel vidéos
document.querySelector(".video-carousel").style.animation = `rotateVideo ${rotationSpeedVideos} infinite linear`;

// Optimisation vidéos : seule la visible joue
function updateVideos() {
  const videoCarousel = document.getElementById("videoCarousel");
  const videoItems = videoCarousel.querySelectorAll(".video-item");
  const angleVideo = 360 / videoItems.length;
  const rotation = (Date.now() / 200) % 360;
  let visibleIndex = Math.round(rotation / angleVideo) % videoItems.length;

  videoItems.forEach((item, index) => {
    const vid = item.querySelector("video");
    if (index === visibleIndex) {
      if (vid.paused) vid.play();
    } else {
      vid.pause();
    }
  });
}
setInterval(updateVideos, 1000);
