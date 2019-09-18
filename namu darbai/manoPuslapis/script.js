var navSlide = () => {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".navigation_links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
  });
};

navSlide();
