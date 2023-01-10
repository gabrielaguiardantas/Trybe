//exercício 1
let x = document.querySelector('#elementoOndeVoceEsta');
//exercício 2
x.parentNode.style.color = 'blue';
//exercício 3 - O segredo aqui está na interpretação dos espaços entre as sections como nós(filhos), bugando a contagem. O x tem 5 filhos pois existe um espaço que é considerado como nó no início, mais um entre as sections e outro no fim. Obs.: Detectei inspecionando na parte Elements. 
x.firstElementChild.innerHTML = 'Oi, testando, testando';
//exercício 4 - console.log facilita verificar
document.querySelector('#pai').firstElementChild;
//exercício 5 - console.log facilita verificar
x.previousElementSibling;
//exercício 6 - console.log facilita verificar
x.nextSibling;
//exercício 7 - console.log facilita verificar
x.nextSibling.nextSibling;
//exercício 8
document.querySelector('#pai').lastElementChild.previousElementSibling;

//Parte 2 - exercício 1
x.parentNode.appendChild(document.createElement('section'));
//Parte 2 - exercício 2
x.appendChild(document.createElement('section'));
//Parte 2 - exercício 3
x.firstElementChild.appendChild(document.createElement('section'));
//Parte 2 - exercício 4
x.firstElementChild.firstElementChild.parentNode.parentNode.nextElementSibling;

//Parte 3 - exercício não consegui vislumbrar a resolução dessa questão após muita reflexão (segue gabarito)
const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes;
for (i = 0; i <= todosOsFilhos.length - 1; i += 1) {
    const filhoAtual = todosOsFilhos[i];
    if(filhoAtual.id !== 'elementoOndeVoceEsta') {
       filhoAtual.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();

