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
};

let header_links = document.querySelectorAll('.links a');
let disableVolume = document.querySelector('.volume');
let learn_more = document.querySelector('.learn_more');
let code_img = document.querySelector('.code_img');
let contact_inpt = document.querySelectorAll('.form .inpt')
let contact_textarea = document.querySelector( '.form textarea')
let contact_submit = document.querySelector( '.form input[type=submit]')


for(let i = 0; i< header_links.length;i++){
    header_links[i].onclick = () => {clickSoundEff()}
    header_links[i].onmouseenter = () => {playSound()}
    header_links[i].onmouseleave = () => {stopSound()}
};

function sound_def(elem,click,enter){
    elem.onclick = () => {
        click()
    }

    elem.onmouseenter = () => {
        enter()
    }
}

for(let i = 0; i< lang_link.length;i++){
    lang_link[i].onclick = () => {clickSoundEff()}
}

sound_def(learn_more,clickSoundEff,playSound);
sound_def(code_img,clickSoundEff,playSound);
sound_def(contact_inpt[0],clickSoundEff,playSound);
sound_def(contact_inpt[1],clickSoundEff,playSound);
sound_def(contact_textarea,clickSoundEff,playSound);
sound_def(contact_submit,clickSoundEff,playSound);