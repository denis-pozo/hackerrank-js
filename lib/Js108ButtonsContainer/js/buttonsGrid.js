var buttonsGrid = document.createElement('div');
buttonsGrid.id = 'buttonsGrid';
buttonsGrid.className = 'buttonContainer';

for(var i = 1 ; i < 10 ; i++) {
    const button = document.createElement('button');
    button.id = `btn${i}`;
    button.className = 'buttonClass';
    button.innerHTML = i;
    buttonsGrid.appendChild(button);
}

document.body.appendChild(buttonsGrid);
const btn5 = document.getElementById('btn5');


btn5.onclick = function() {
    var grid = document.getElementById('buttonsGrid');
    var buttons = grid.getElementsByTagName('button');
    [...buttons].forEach((button) => {
        switch(button.innerHTML) {
            case "1":
                button.innerHTML = 4;
                break;
            case "2":
                button.innerHTML = 1;
                break;
            case "3":
                button.innerHTML = 2;
                break;
            case "4":
                button.innerHTML = 7;
                break;
            case "6":
                button.innerHTML = 3;
                break;
            case "7":
                button.innerHTML = 8;
                break;
            case "8":
                button.innerHTML = 9;
                break;
            case "9":
                button.innerHTML = 6;
                break;
            default:
                break;
        }
    })
}

