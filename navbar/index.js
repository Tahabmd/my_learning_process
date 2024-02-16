const button = document.querySelector(".expander-button");
let expand = document.querySelector(".container");
button.addEventListener("click", function () {
  button.classList.toggle("active");
  expand.classList.toggle("expand");
});
