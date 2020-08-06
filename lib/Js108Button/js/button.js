var countButton = document.createElement('button');
countButton.id = 'btn';
countButton.innerHTML = '0';
document.body.appendChild(countButton);

btn.onclick = function() {
    btn.innerHTML++;
}
