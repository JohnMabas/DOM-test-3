let btn = document.querySelector('#btn');
let div = document.querySelector('#box');

function changeText(){
    div.innerText = 'Style Changed!';
    div.style.backgroundColor = 'green';
    div.style.color ='blue';
    div.style.fontSize = '50px'
}


btn.addEventListener('click', changeText);