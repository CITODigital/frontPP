"use strict";
const sliderContent = document.querySelector('.slider__content');
const sliderSwitchers = document.querySelector('.slider__switchers');
let currentSlide = 0;
let position = 0;
let timer;

const switchSlide = (to) => {
    let from  = currentSlide % sliderContent.childElementCount;
    currentSlide = to % sliderContent.childElementCount;
    sliderSwitchers.childNodes[from].classList.replace('slider__switcher_on', 'slider__switcher_off');
    sliderSwitchers.childNodes[currentSlide].classList.replace('slider__switcher_off', 'slider__switcher_on');
    position = - (sliderContent.clientWidth + 56) * currentSlide;
    sliderContent.style.left = `${position}px`;
}

const startSliderAnimation = (time= 6000) => {
    timer = setInterval(() => {
        switchSlide(currentSlide + 1);
    }, time)
};

const clickSwitcher = function(e) {
    clearInterval(timer);
    switchSlide(+e.target.id);
    startSliderAnimation();
};

sliderSwitchers.addEventListener('click', clickSwitcher);

startSliderAnimation();
