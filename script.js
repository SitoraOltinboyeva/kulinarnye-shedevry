// Приветственное сообщение

function showMessage(){

    alert("Добро пожаловать на сайт «Кулинарные шедевры»!");

}

// Плавная прокрутка меню

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Отправка формы

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Ваше сообщение успешно отправлено!");

    form.reset();

});

// Анимация карточек

const cards = document.querySelectorAll(

    ".category-card, .popular-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

// Кнопка вверх

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "60px";
topButton.style.height = "60px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#f5a623";
topButton.style.color = "black";
topButton.style.fontSize = "28px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
topButton.style.transition = "0.3s";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Эффект меню при скролле

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.background = "rgba(0,0,0,0.95)";

    }

    else{

        header.style.background = "rgba(0,0,0,0.7)";

    }

});

// Автоматическая смена текста

const heroTitle = document.querySelector(".hero h1");

const texts = [

    "Кулинарные <span>шедевры</span>",

    "Вкусные <span>рецепты</span>",

    "Готовьте <span>быстро</span>"

];

let index = 0;

setInterval(() => {

    heroTitle.innerHTML = texts[index];

    index++;

    if(index >= texts.length){

        index = 0;

    }

}, 3500);

// Эффект появления текста

const hiddenElements = document.querySelectorAll(

    ".section-title, .tips-text, .about-text"

);

const textObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

hiddenElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";
    el.style.transition = "1s";

    textObserver.observe(el);

});

// Добавление стилей для анимации карточек

const style = document.createElement("style");

style.innerHTML = `

.hidden{
    opacity:0;
    transform:translateY(50px);
    transition:1s;
}

.show{
    opacity:1;
    transform:translateY(0px);
}

`;

document.head.appendChild(style);