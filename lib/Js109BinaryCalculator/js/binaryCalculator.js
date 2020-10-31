const display = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

let operand1 = '';
let operand2 = '';
let operation;

btn0.addEventListener('click', function() {
  if(operation) {
    operand2 += '0';
  } else {
    operand1 += '0';
  }
  display.innerHTML += 0;
});

btn1.addEventListener('click', function() {
  if(operation) {
    operand2 += '1';
  } else {
    operand1 += '1';
  }
  display.innerHTML += 1;
});

btnClr.addEventListener('click', function() {
  display.innerHTML = '';
  operand1 = '';
  operand2 = '';
  operation = undefined;
});

btnSum.addEventListener('click', function() {
  if(operand1.length === 0) {
    return;
  }

  if(operation) {
    return;
  }

  operation = 'sum';
  display.innerHTML += '+';
});

btnSub.addEventListener('click', function() {
  if(operand1.length === 0) {
    return;
  }

  if(operation) {
    return;
  }
  operation = 'sub';
  display.innerHTML += '-';
});

btnMul.addEventListener('click', function() {
  if(operand1.length === 0) {
    return;
  }

  if(operation) {
    return;
  }
  operation = 'mul';
  display.innerHTML += '*';
});

btnDiv.addEventListener('click', function() {
  if(operand1.length === 0) {
    return;
  }

  if(operation) {
    return;
  }
  operation = 'div';
  display.innerHTML += '/';
});

btnEql.addEventListener('click', function() {
  if(operand2.length === 0) {
    return;
  }

  const res = calculateResult();
  operation = undefined;
  operand1 = res;
  operand2 = '';
  display.innerHTML = res;
});

function calculateResult() {
  x = parseInt(operand1, 2);
  y = parseInt(operand2, 2);
  console.log(x);
  console.log(y);

  let res;
  switch(operation) {
    case 'sum':
      res = x+y;
      break;
    case 'sub':
      res = x-y;
      break;
    case 'mul':
      res = x*y;
      break;
    case 'div':
      res = x/y;
      break;
    default:
      res = undefined;
  }
  console.log(res);
  return (res >>> 0).toString(2);
}
