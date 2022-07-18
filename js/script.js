let counterDetractors = 0;
let counterPromoters = 0;
let counterPassive = 0;
let buttons = document.querySelectorAll(".btn");
let submitButton = document.querySelector(".btn-submit");
for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  function voteNps() {
    let valueButton = +button.innerHTML;


    if (valueButton >= 0 && valueButton <= 6) {
      counterDetractors++;
      

    } else if (valueButton === 7 || valueButton === 8) {
      counterPassive++;
      
    } else if (valueButton === 9 || valueButton === 10) {
      counterPromoters++;
      
    }
  }
  button.addEventListener("click", voteNps);
}
submitButton.addEventListener("click", submitNps);
function submitNps() {
 calcNpsDc(counterDetractors, counterPassive, counterPromoters,)
}
function calcNpsDc(detractors, passive, promoters) {
  let totalVotos= counterDetractors + counterPassive + counterPromoters
  console.log(`total de detratores é = ${counterDetractors}`);
  console.log(`total de neutros é = ${counterPassive}`);
  console.log(`total de promotores é = ${counterPromoters}`);

  console.log(`total de votos é = ${totalVotos}`);

}
//criar uma função somar todos o votos
//depois criar uma fu8nção   calcular cada percentual de
//depois criar uma função de fazer o calculo nps
//criar um botão ver rersultado que seta atualizado cada vez qwue for clicado

