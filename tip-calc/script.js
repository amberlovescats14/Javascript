const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const total = document.querySelector('.total-amount')
const tipamount = document.querySelector('.tip-amount')
function calculate() {
  console.log('hi');
  tipamount.innerHTML = bill.value * .15;
  subtract()
}
function subtract() {
  console.log('subtract')
  total.innerHTML = (bill.value) - (tipamount.value)
}

bill.addEventListener('input', calculate )

