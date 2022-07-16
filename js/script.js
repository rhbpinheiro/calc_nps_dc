let buttons = document.querySelectorAll(".btn")
for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i]
  function votar() {
    console.log(button.getAttribute("data"));
  }
  button.addEventListener("click", votar);
}
