const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const total = document.querySelector('.total-amount')
const tipamount = document.querySelector('.tip-amount')


function calculate() {
  console.log('hi');
  tipamount.innerHTML = bill.value * .15;
}

function addTotal() {
  x = 1
  if (bill.value > 1) {
    x = bill.value * .15
  }
  console.log(x + bill.value)
}

bill.addEventListener('input', calculate )
bill.addEventListener('input', addTotal)

