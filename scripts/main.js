// function time
const timeTxt = document.querySelector(".time span");
const timeImg = document.querySelector(".time .timeImg");

// adding time
function nowTime(){
    
    const date = new Date();
    timeTxt.innerHTML = date.toLocaleTimeString();
    if(timeTxt.innerText.substr(0,2) > 18){
        timeImg.src = "./icons_img/night.png"        
    } else{ 
        timeImg.src = "./icons_img/morning.png"        
    }
};

setInterval(nowTime,1000);

// Particle on/off Button
const particleBtn = document.querySelector(".particleBtn");
let particleIcon = document.querySelector(".particleIcon");

particleBtn.addEventListener("click", e => {
    const particleJs = document.querySelector("canvas")
    if(particleJs.style.width == "100%"){
        particleBtn.innerHTML = '<img src="./icons_img/atom.png" alt="Atom"> On particle'
        particleJs.style.width = 0
        particleIcon.src = "./icons_img/hover-atom.png"
    } else{
        particleBtn.innerHTML = '<img src="./icons_img/hover-atom.png" alt="Atom">   Off particle'
        particleJs.style.width = "100%"
    }
});

const volume_btn = document.querySelector('.volume');

volume_btn.addEventListener('click', e => {
    const audio = document.querySelectorAll('audio');
    
    if(audio.muted == false) {
        volume_btn.innerHTML = "<img class='particleIcon' src='./icons_img/volume_on.png' alt='Disable click effects'> Disable click effects"
        audio.forEach(e => e.muted = true);
    }
    else {
        volume_btn.innerHTML = "<img class='particleIcon' src='./icons_img/disable_volume.png' alt='Enable volume'> Enable click effects";
        audio.forEach(e => e.muted = false);
    }
});


// for lags
setInterval(() => {
    console.clear()
},5000);


let mouse_circle = document.querySelector('.circle');

window.onmousemove = () => {
    let e = window.event;

    let getY = e.pageY-15;
    let getX = e.pageX-25;

    mouse_circle.style.top = `${getY}px`;
    mouse_circle.style.left = `${getX}px`;
};

