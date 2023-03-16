
//hamburger menu

const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.navbar');
let header = document.querySelector('.header-wrapper');

toggleButton.addEventListener('click', function () {
    if (menu.classList.contains('mobile-menu')) {

        menu.classList.remove('mobile-menu');
        toggleButton.style.transform = 'rotate(-180deg)';
        toggleButton.style.transition = 'ease-out 600ms';
        header.style.background = "rgba(255, 255, 255, 1)";
        console.log("hamburger menu has been turned off")

    } else {
        menu.classList.add('mobile-menu');
        toggleButton.style.transform = 'rotate(180deg)';
        toggleButton.style.transition = 'ease-in 400ms';
        header.style.background = "rgba(255, 255, 255, .8)";
        console.log("hamburger menu has been displayed")
    }
});

//about section buttons

const shortButton = document.querySelector('#short-button');
const normalButton = document.querySelector('#normal-button');
const longButton = document.querySelector('#long-button');
const textchange = document.querySelector('#aboutme');

shortButton.addEventListener('click', function(){

    textchange.textContent="I'm trying to do better.";
    console.log("Short description has been selected")

});

normalButton.addEventListener('click', function(){

    textchange.textContent="Hello! My name is Michael. I’m a 21-year-old student at the De Monfort University and soon I will be able to call myself a graduate. I'm currently open to any development possibilities to gain the necessary experience and finally begin my journey in the tech industry.";
    console.log("Normal description has been selected")

});

longButton.addEventListener('click', function(){

    textchange.textContent="Hello! My name is Michael. I’m a 21-year-old student at the De Monfort University and soon I will be able to call myself a graduate. Since I remember I liked to build and fix stuff. I believe my journey with a fascination with computer science started as a teenager when I started to disassemble most of the electronic devices I could find in my room. And I hope that child's spark for discovering new things and technologies never fades away.I'm currently open to any development possibilities to gain the necessary experience and finally begin my journey in the tech industry.";
    console.log("Long description has been selected")

});
