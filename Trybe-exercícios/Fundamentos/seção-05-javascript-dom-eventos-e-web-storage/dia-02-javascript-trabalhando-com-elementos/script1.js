//exercício 1
document.getElementsByTagName('body')[0].appendChild(document.createElement('h1'));
document.getElementsByTagName('h1')[0].innerText = "Exercício 5.2 - Javascript DOM"
//exercício 2
document.getElementsByTagName('body')[0].appendChild(document.createElement('main'));
document.getElementsByTagName('main')[0].className = 'main-content';
//exercício 3
document.getElementsByTagName('main')[0].appendChild(document.createElement('section'));
document.getElementsByTagName('section')[0].className = 'center-content';
//exercício 4
document.getElementsByTagName('section')[0].appendChild(document.createElement('p'));
document.getElementsByTagName('p')[0].innerText = "METELI GOLI";
//exercício 5
document.getElementsByTagName('main')[0].appendChild(document.createElement('section'));
document.getElementsByTagName('section')[1].className = 'left-content';
//exercício 6 
document.getElementsByTagName('main')[0].appendChild(document.createElement('section'));
document.getElementsByTagName('section')[2].className = 'right-content';
//exercício 7
document.getElementsByTagName('section')[1].appendChild(document.createElement('img'));
document.getElementsByTagName('img').src = "https://picsum.photos/200";
document.getElementsByTagName('img')[0].className = 'small-image';
//exercício 8
document.getElementsByClassName('right-content')[0].appendChild(document.createElement('ul'));
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez' ]
for (i = 0; i < arrayNumbers.length; i += 1) {
let c = document.getElementsByTagName('ul')[0].appendChild(document.createElement('li'));
c.innerHTML = arrayNumbers[i];
}
//exercício 9
for (i = 1; i <= 3; i += 1) {
document.getElementsByTagName('main')[0].appendChild(document.createElement('h3'));
}

//Segunda parte - exercício 1
document.getElementsByTagName('h1')[0].className = 'title';
//exercício 2
for (i = 0; i <= 2; i += 1) {
document.getElementsByTagName('h3')[i].className = 'description';
}
//exercício 3
document.getElementsByTagName('main')[0].removeChild(document.getElementsByClassName('left-content')[0]);
//exercício 4
document.getElementsByClassName('right-content')[0].style.marginRight = 'auto'; 
//exercício 5
document.getElementsByTagName('main')[0].style.backgroundColor = 'green';
//exercício 6
let q = document.getElementsByTagName('ul')[0];
q.removeChild(q.lastChild);
q.removeChild(q.lastChild);


