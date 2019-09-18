var figure = document.querySelector("#square");
figure.addEventListener("click", roundGreen);

function roundGreen() {
  if (figure.classList.contains("red")) {
    figure.classList.remove("red");
    figure.classList.add("green");
  } else {
    figure.classList.remove("green");
    figure.classList.add("red");
  }
}
