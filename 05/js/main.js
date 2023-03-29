function writeInDisplay(value, exception) {
  const displayCalc = document.querySelector(".last-calc")
  if (exception == true) {
    displayCalc.innerHTML += `${value}`
  }
  else {
    displayCalc.innerHTML += `${value} `
  }
}

function clean() {
  var toClear = document.querySelector('.last-calc').textContent
  document.querySelector('.last-calc').innerHTML = toClear.substring(0, toClear.length - 2)
}

function clearEntry() {
  document.querySelector(".last-calc").innerHTML = ""
  document.getElementById('calc-result').innerHTML = 0
}

function calc() {
  var operation = document.querySelector('.last-calc').innerHTML;
  document.getElementById('calc-result').innerHTML = eval(operation)
}