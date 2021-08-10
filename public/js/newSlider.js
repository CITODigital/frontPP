"use strict";
const sliderContent = document.querySelector('.slider__pages');
const sliderSwitchers = document.querySelector('.slider__switchers');
let currentSlide = 0;
let timer;

const turnSwitcher = (e) => {
    console.log(e.target.scrollLeft);
    let from  = currentSlide % sliderContent.childElementCount;
    currentSlide = Math.round(e.target.scrollLeft/sliderContent.clientWidth);
    sliderSwitchers.childNodes[from].classList.remove('slider__switcher_on');
    sliderSwitchers.childNodes[currentSlide].classList.add('slider__switcher_on');
}

const switchSlide = (to) => {
    currentSlide = to % sliderContent.childElementCount;
    sliderContent.scrollTo(sliderContent.clientWidth*currentSlide, 0);
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

sliderContent.addEventListener('scroll', turnSwitcher);
sliderSwitchers.addEventListener('click', clickSwitcher);

startSliderAnimation();
