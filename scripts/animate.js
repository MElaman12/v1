import WOW from "./wow.min.js";

window.addEventListener('scroll', function(){
    const header = document.querySelector('#header')
    header.classList.toggle('set_bg', window.scrollY > 0)
})


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
};

jump()


const partfolio_el = document.querySelector("#partfolio_el");
const partfolio = document.querySelector(".partfolio");
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
    clickSoundEff.play();
}

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
    }
};


// анимация при  скроле
let wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);

wow.init();