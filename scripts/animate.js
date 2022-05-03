// jumping animate!
let welcomeTextSpan = document.querySelectorAll(".wrapper .welcomeText div")

let jump = () => {
    for(let i = 1; i < welcomeTextSpan.length; i++){
           setInterval(() => {
               welcomeTextSpan[i].classList.add("an")
            },3000)
        setInterval(()=> {
            welcomeTextSpan[i].classList.remove("an")
        },10000)
    }
}
jump()

// settings set img onmouseenter!
const settingImg = document.querySelector("#header .header .settings .stImg")
const st_b = document.querySelector("#header .header .settings .st_b")

settingImg.onmouseenter = e => settingImg.src = "./icons_img/hover-settings-icon.png"
settingImg.onmouseleave = e => settingImg.src = "./icons_img/settings-icon.png"

settingImg.onclick = e => {
    if(st_b.style.top == "90px"){
        st_b.style.top = "-200px"
    }
    else st_b.style.top = "90px"
}
        

// set theme icon
const  setTh = document.querySelector("#header .header .settings .setTh") // button night|white 
const thIc = document.querySelector("#header .header .settings .ntIc"); // Night|White theme icon
let night_text = "Night theme";
let white_text = "White theme";
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

const partfolio_el = document.querySelector("#partfolio_el"); // <a></a> element
const partfolio = document.querySelector(".partfolio"); // partfolio 
const stImg = document.querySelector('.settings .stImg');
const scaleValue = 'scale(0)';
const scaleValue_big = 'scale(1)';

partfolio_el.onclick = () => {
    partfolio.style.transform = scaleValue_big

    setTimeout(() => {
        partfolio.style.transform = scaleValue
    }, 3000);

}

partfolio.onclick = () => {
    partfolio.style.transform = scaleValue
    clickSound.play();
}


stImg.addEventListener('click', clickSoundEff) // adding click sound effect
stImg.addEventListener('mouseenter', playSound) // adding mouseenter sound effect


// open and close: question animate onclick

let question_item = document.querySelectorAll('.developers .questions .item');
let question_answer = document.querySelectorAll('.developers .questions .item span');
let down_arrow = document.querySelectorAll('.developers .questions .item .down_arrow');


for(let i = 0; i<question_item.length;i++){
    question_item[i].onclick = () => {
        question_answer[i].classList.toggle('active');
        clickSoundEff()
        question_item[i].classList.toggle('adPd');
        down_arrow[i].classList.toggle('rotate');
    };
};