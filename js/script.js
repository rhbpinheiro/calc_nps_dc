let counterDetractors = 0;
let counterPromoters = 0;
let counterPassive = 0;
let buttonArray = [];
let somaArray = 0
let total = 0;

let buttons = document.querySelectorAll(".btn");

let submitButton = document.querySelector(".btn-submit");

for (var i = 0; i < buttons.length; i++) {

  let button = buttons[i];

  function voteNps() {

    let valueButton = +button.innerHTML;

    buttonArray.push(valueButton);

    somaArray += valueButton

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
function calcularPercentual(cliente) {
 let percentual = (total * (cliente / 100)).toFixed(2);
  return percentual
}
function calcNpsDc(detractors, passive, promoters) {
  total= counterDetractors + counterPassive + counterPromoters
let media = somaArray / total;
 console.log(`total de detratores é = ${counterDetractors}`);
 console.log(`total de neutros é = ${counterPassive}`);
 console.log(`total de promotores é = ${counterPromoters}`);
 console.log(`A soma das notas é ${somaArray}`);
 console.log(`A média das notas é ${media.toFixed(2)}`);
 console.log(`O valor da nota de cada pergunta ${buttonArray}`);
 console.log(`total de votos é = ${total}`);
 console.log(`O percentual detratores é = ${calcularPercentual(counterDetractors)}%`);
 console.log(`O percentual detratores é = ${calcularPercentual(counterPassive)}%`);
 console.log(`O percentual detratores é = ${calcularPercentual(counterPromoters)}%`);
}


