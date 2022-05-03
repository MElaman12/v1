let header_links = document.querySelectorAll('.links a');
let disableVolume = document.querySelector('.volume');
let learn_more = document.querySelector('.learn_more');
let code_img = document.querySelector('.code_img');
let question = document.querySelectorAll('.developers .question1');

for(let i = 0; i< header_links.length;i++){
    header_links[i].onclick = () => {clickSoundEff()}
    header_links[i].onmouseenter = () => {playSound()}
    header_links[i].onmouseleave = () => {stopSound()}
};

particleBtn.onclick = () => clickSoundEff();
particleBtn.onmouseenter = () => playSound();
// ------

disableVolume.onclick = () => clickSoundEff();
disableVolume.onmouseenter = () => playSound();
// -------

setTh.onclick = () => {
    if(setTh.innerText == "White theme"){
        thIc.src = './icons_img/nightTh.png'
        thIc.textContent = "Black theme"
    } else{
        thIc.src = './icons_img/white.png'
        thIc.textContent = "White theme"
    }
    clickSoundEff()
}
setTh.onmouseenter = () => playSound();
// -------

learn_more.onclick = () => clickSoundEff();
learn_more.onmouseenter = () => playSound();
learn_more.onmouseleave = () => stopSound();
// -------

code_img.onclick = () => clickSoundEff();
code_img.onmouseenter = () => playSound();
// -------