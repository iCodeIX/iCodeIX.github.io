const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav");
const typing = document.querySelector(".typing-about");
/* listeners */

menuIcon.addEventListener("click", showNav);
closeIcon.addEventListener("click", hideNav);

addEventListener('scroll', (event) => {
    hideNav();
});


/* functions */

function showNav() {
    navMenu.classList.add("show-nav");
}

function hideNav() {
    navMenu.classList.remove("show-nav");
  
}


/* typing effect about me  */

const aboutMe = 'Console.log("Hello World. Im your future developer!")';
var i = 0;
function typingAbout() {

    if (i < aboutMe.length) {
        typing.innerHTML += aboutMe.charAt(i);
        i++;
    }

    setTimeout(typingAbout, 150);

}

typingAbout();

/* projects more about /description toggle */

const descBtns = document.querySelectorAll(".more-about-btn");

descBtns.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        if (item.nextElementSibling.classList.contains("show-desc")) {
            item.nextElementSibling.classList.toggle("hide-desc");
        } else {
            item.nextElementSibling.classList.toggle("show-desc");
        }

    });
});


/* go top button */

const goUpBtn = document.querySelector(".go-top")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUpBtn.style.display = "block";
    } else {
        goUpBtn.style.display = "none";
    }
}

goUpBtn.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}