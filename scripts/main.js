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

// mobile
let mobile_heador = document.querySelector('.mobile-settings');
let links = document.querySelectorAll('.mobile-settings .item_links a');

for(let i = 0; i < links;i++){
    links[i].onclick = () => {
        mobile_heador.style.display = 'none';
    }
};


settings.onclick = () => {
    if(document.body.clientWidth + 15 <= 670){
        mobile_heador.style.display = 'block';
    } else{
        setting_menu.classList.toggle('y')
        line2.classList.toggle('d_line');
        line1.classList.toggle('line1')
        line3.classList.toggle('line3')
        setTimeout(() => {
            if(line2.style.display == 'none') {
                line2.style.display = 'block'
            }else{ line2.style.display = 'none'};
        },200)
    }
    clickSoundEff()
};

// set theme icon
let theme_ic = document.querySelectorAll('.settings .menu .theme_ic');
let checkbox = document.querySelectorAll('.settings .menu input');
let theme_txt = document.querySelectorAll('.settings .menu  span');

const default_src = [
    './icons_img/white.png',
    './icons_img/hover-atom.png',
    './icons_img/volume_on.png'
]

const new_src = [
    './icons_img/nightTH.png',
    './icons_img/atom.png',
    './icons_img/disable_volume.png'
]

for(let i = 0; i < checkbox.length;i++){
    checkbox[i].onclick = () => {

        if(theme_txt[i].classList.value == 'cyan'){
            theme_ic[i].src = default_src[i]
            theme_txt[i].classList.remove('cyan')

            if(i == 1){
                let canvas = document.querySelector('canvas');
                canvas.style.width = '100%'
            } else if (i == 2){
                cr_audio.src = './sounds/click2.wav';
                clickSound.src = './sounds/click.wav';
            }

        } else{
            theme_txt[i].classList.add('cyan');
            theme_ic[i].src = new_src[i];

            if(i == 1){
                let canvas = document.querySelector('canvas');
                canvas.style.width = '0px'
            } else if (i == 2){
                cr_audio.src = '';
                clickSound.src = '';
            }
        }
    }
}

// close
let close = document.querySelector('img.close');

close.onclick = () => {
    mobile_heador.style.display = 'none'
    clickSoundEff()
}

// language
let lang_link = document.querySelectorAll('.lang_link');
let lang_btn = document.querySelector('.lang_btn');
let lang_txt = document.querySelector('.lang_btn p');

lang_btn.onclick = () => {
    clickSoundEff()
    for(let item of lang_link){
        item.classList.toggle('fl')
    }
};

lang_txt.onclick = () => {
    lang_txt.classList.toggle('cyan')
};


// input  first letter uppercase function
let inpt = document.querySelectorAll('.form form .inpt')[0]

inpt.onkeypress = () => {
    let get_first_letter = inpt.value.substr(0,1).toUpperCase();
    let get_all_letters = inpt.value.substr(1);
    inpt.value = get_first_letter + get_all_letters;
};

window.addEventListener("resize", function(event) {
    console.log(document.body.clientWidth + 15 +' wide by ' + document.body.clientHeight+' high');
})