const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const total = document.querySelector('.total-amount')
const tipamount = document.querySelector('.tip-amount')


function calculate() {
  console.log('hi');
  tipamount.innerHTML = bill.value * .15;
}

function addTotal() {
  a = parseFloat(bill.value * .15)
  b = parseFloat(bill.value)
  c = a + b
  total.innerHTML = c
}

bill.addEventListener('input', calculate )
bill.addEventListener('input', addTotal)



function changeTip() {
  tipPercent = parseFloat(tip.value)
  billAmount = parseFloat(bill.value)
  tips = parseFloat(tipamount.value)

  if (billAmount > 1) {
    tipamount.innerHTML = tipPercent * billAmount;

    total.innerHTML = billAmount + tips
    
  }
  else {
    return
 
  }
}
tip.addEventListener('input', changeTip)