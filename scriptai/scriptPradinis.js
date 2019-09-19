$(document).ready(function() {
  $(".single-item").slick({
    prevArrow: '<img class="arrowLeft" src="img/arrowLeft.svg" alt="">',
    nextArrow: '<img class="arrowRight" src="img/arrowRight.svg" alt="">',
    arrows: true
  });
});
//HAMBURGERIS

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");
  const linkai = $(".nav_links li a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
    linkai.toggleClass("nav_links_fade");
  });
};

navSlide();
