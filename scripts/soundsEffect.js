// add sound effect
let cr_audio = document.createElement('audio');
cr_audio.src = './sounds/click2.wav';
cr_audio.muted = false;
document.body.appendChild(cr_audio);

let clickSound = document.createElement('audio');
clickSound.src = './sounds/click.wav';
clickSound.muted = false;
document.body.appendChild(clickSound);

// onmouseenter and onmouseleave functions 
let playSound = () => {
    cr_audio.autoplay = true;
    cr_audio.play();
}

let stopSound = () => {
    cr_audio.pause();
}

// click sound function
let clickSoundEff = () => {
    clickSound.play();
}

let header_links = document.querySelectorAll('.links a');
let disableVolume = document.querySelector('.volume');
let learn_more = document.querySelector('.learn_more');
// let code_img = document.querySelector('.code_img');
// let question = document.querySelectorAll('.developers .question1');

for(let i = 0; i< header_links.length;i++){
    header_links[i].onclick = () => {clickSoundEff()}
    header_links[i].onmouseenter = () => {playSound()}
    header_links[i].onmouseleave = () => {stopSound()}
};
// ------
learn_more.onclick = () => clickSoundEff();
learn_more.onmouseenter = () => playSound();
learn_more.onmouseleave = () => stopSound();
// -------


code_img.onclick = () => clickSoundEff();
code_img.onmouseenter = () => playSound();
// -------