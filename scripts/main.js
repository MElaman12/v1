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

// settings
let setting_menu = document.querySelector('.settings .menu');
let settings = document.getElementById('settings');
let line1 = document.querySelectorAll('.settings .line')[0];
let line2 = document.querySelectorAll('.settings .line')[1];
let line3 = document.querySelectorAll('.settings .line')[2];

settings.onmouseenter = () => playSound()

settings.onclick = () => {
    setting_menu.classList.toggle('y')
    line2.classList.toggle('d_line');
    line1.classList.toggle('line1')
    line3.classList.toggle('line3')
    clickSoundEff()
    setTimeout(() => {
        if(line2.style.display == 'none') {
            line2.style.display = 'block'
        }else{ line2.style.display = 'none'};
    },200)
}

// set theme icon
let theme_ic = document.querySelectorAll('.settings .menu .theme_ic');
let checkbox = document.querySelectorAll('.settings .menu input');
let theme_txt = document.querySelectorAll('.settings .menu  span')

checkbox[0].onclick = () => {
    clickSoundEff()
    if(theme_ic[0].classList.value == 'theme_ic black'){
        theme_ic[0].src= "./icons_img/white.png"
        theme_ic[0].classList.add('white')
        theme_ic[0].classList.remove('black')
        theme_txt[0].style.color = '#fff'
    }else if(theme_ic[0].classList.value == 'theme_ic white'){
        theme_ic[0].src= "./icons_img/nightTh.png"
        theme_ic[0].classList.remove('white')
        theme_ic[0].classList.add('black')
        theme_txt[0].style.color = '#03e9f4'
    }
};


checkbox[1].onclick = () => {
    let canvas = document.querySelector('canvas');
    clickSoundEff()
    if(theme_ic[1].classList.value == 'theme_ic prJs'){
        theme_ic[1].src= "./icons_img/atom.png"
        theme_ic[1].classList.add('prJsof')
        theme_ic[1].classList.remove('prJs')
        theme_txt[1].style.color = '#03e9f4'
        canvas.style.width = '0'
    } else if(theme_ic[1].classList.value == 'theme_ic prJsof'){
        theme_ic[1].src= "./icons_img/hover-atom.png"
        theme_ic[1].classList.add('prJs')
        theme_ic[1].classList.remove('prJsof')
        theme_txt[1].style.color = '#fff'
        canvas.style.width = '100%'
    }
};

checkbox[2].onclick = () => {
    let canvas = document.querySelector('canvas');
    clickSoundEff()
    if(theme_ic[2].classList.value == 'theme_ic volume'){
        theme_ic[2].src= "./icons_img/disable_volume.png"
        theme_ic[2].classList.add('dis_volume')
        theme_ic[2].classList.remove('volume')
        theme_txt[2].style.color = '#03e9f4'
        clickSound.src = '';
        cr_audio.src = '';
    } else if(theme_ic[2].classList.value == 'theme_ic dis_volume'){
        theme_ic[2].src= "./icons_img/volume_on.png"
        theme_ic[2].classList.add('volume')
        theme_ic[2].classList.remove('dis_volume')
        theme_txt[2].style.color = '#fff'
        cr_audio.src = './sounds/click2.wav';
        clickSound.src = './sounds/click.wav';
    }
};

// input  first letter uppercase function
// let inpt = document.querySelectorAll('.form form .inpt')[0]

// inpt.onkeypress = () => {
//     let get_first_letter = inpt.value.substr(0,1).toUpperCase();
//     let get_all_letters = inpt.value.substr(1);
//     inpt.value = get_first_letter + get_all_letters;
// };