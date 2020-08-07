const calculator = document.createElement('div');
calculator.id = 'calculator';
calculator.className = 'calculator';
document.body.appendChild(calculator);

const display = document.createElement('div');
display.id = 'res';
display.className = 'resultDisplay';
calculator.appendChild(display);

const buttons = document.createElement('div');
buttons.id = 'btns';
buttons.className = 'buttons';
calculator.appendChild(buttons);

const button0 = document.createElement('button');
button0.id = 'btn0';
button0.innerHTML = '0';
button0.className = 'binary';
buttons.appendChild(button0);

const button1 = document.createElement('button');
button1.id = 'btn0';
button1.innerHTML = '1';
button1.className = 'binary';
buttons.appendChild(button1);

const buttonClear = document.createElement('button');
buttonClear.id = 'btnClr';
buttonClear.innerHTML = 'C';
buttonClear.className = 'final';
buttons.appendChild(buttonClear);

const buttonEqual = document.createElement('button');
buttonEqual.id = 'btnEql';
buttonEqual.innerHTML = '=';
buttonEqual.className = 'final';
buttons.appendChild(buttonEqual);

const buttonSum = document.createElement('button');
buttonSum.id = 'btnSum';
buttonSum.innerHTML = '+';
buttonSum.className = 'ops';
buttons.appendChild(buttonSum);

const buttonSub = document.createElement('button');
buttonSub.id = 'btnSub';
buttonSub.innerHTML = '-';
buttonSub.className = 'ops';
buttons.appendChild(buttonSub);

const buttonMult = document.createElement('button');
buttonMult.id = 'btnMul';
buttonMult.innerHTML = '*';
buttonMult.className = 'ops';
buttons.appendChild(buttonMult);

const buttonDiv = document.createElement('button');
buttonDiv.id = 'btnDiv';
buttonDiv.innerHTML = '/';
buttonDiv.className = 'ops';
buttons.appendChild(buttonDiv);
