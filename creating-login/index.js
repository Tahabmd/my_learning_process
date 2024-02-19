let input = document.querySelector("input");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let number = 8;
function focus() {
  input.addEventListener("focus", () => {
    p.innerHTML = `your password should be 8 characters<br>`;
    p.innerHTML += `password must contain at least one lowercase letter, one uppercase letter, and one digit`;
  });
}
focus();
input.addEventListener("blur", () => {
  p.innerHTML = ``;
});
input.addEventListener("keypress", () => {
  var value = document.querySelector("input").value;
  let val = value.split("");

  if (value.length == 7) {
    p.innerHTML = "Valid password!";
    val.forEach(function (item) {
      if (item.toLocaleUpperCase() === item) {
        h3.innerHTML = "password has uppercase";
      }
    });
  } else {
  }
});
input.addEventListener("keydown", (event) => {
  var value = document.querySelector("input").value;

  console.log(value);
  if (event.code === "backspace") {
    value -= value[-1];
    if (value.length < 7) {
      focus();
    }
  }
});
