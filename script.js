function display(elemento, valor) {
    elemento.style.display = valor
}
let botoes1 = document.querySelector(".botoes1");
let botoes2 = document.querySelector(".botoes2");
let botoes3 = document.querySelector(".botoes3");
let botoes4 = document.querySelector(".botoes4");
let confirmar = document.querySelector("#confirmar");
var perguntas = document.querySelectorAll(".perguntas");
var placar = document.querySelector('.placar');
var pontos = document.getElementById('pontos');
display(confirmar, 'none');
perguntas = Array.from(perguntas)
let qtd_certas = 0;
let qtd_erradas = 0;
let k = 0;
perguntas[0].style.display = 'flex';
botoes1.addEventListener('click', responder1);
botoes2.addEventListener('click', responder2);
botoes3.addEventListener('click', responder3);
botoes4.addEventListener('click', responder4);
function responder1(e) {
    if (k == 0) {
        if (e.target.classList.contains("btn_certo")) {
            qtd_certas++;
            e.target.classList.add('certa');
        }
        else {
            qtd_erradas++;
            e.target.classList.add('errada');
        }
        k++;
    }
    atualizar(perguntas, k), 10000
}
function responder2(e) {

    if (k == 1) {
        if (e.target.classList.contains("btn_certo")) {
            qtd_certas++;
            e.target.classList.add('certa');
        }
        else {
            qtd_erradas++;
            e.target.classList.add('errada');
        }
        k++;
    }
    atualizar(perguntas, k);
}
function responder3(e) {

    if (k == 2) {
        if (e.target.classList.contains("btn_certo")) {
            qtd_certas++;
            e.target.classList.add('certa');
        }
        else {
            qtd_erradas++;
            e.target.classList.add('errada');
        }
        k++;
    }
    atualizar(perguntas, k);
}
function responder4(e) {
    if (k == 3) {
        if (e.target.classList.contains("btn_certo")) {
            qtd_certas++;
            e.target.classList.add('certa');
        }
        else {
            qtd_erradas++;
            e.target.classList.add('errada');
        }
    }
    display(confirmar, 'flex');


}

function atualizar(elemento, indice) {
    function tempo() {
        elemento[indice - 1].style.display = 'none';
        elemento[indice].style.display = 'flex';
    }
    setTimeout(tempo, 1500);
}
let qtd = perguntas.length;


confirmar.addEventListener('click', () => {
    pontos.className = '';
    let porcentagem = (qtd_certas * 100)/qtd;
    if (porcentagem >= 50) {
        pontos.classList.add("pontos_bons");
    }
    else {
        pontos.classList.add('pontos_ruins');
    }
    display(confirmar, 'none');
    perguntas[k].style.display = 'none';
    placar.classList.remove('escondido');
    pontos.innerHTML = `Você acertou ${qtd_certas} e errou ${qtd_erradas}.`;
    let btn_reinicar = document.createElement('button');
    btn_reinicar.textContent = 'Reinicar o QUIZ';
    btn_reinicar.classList.add('btn_reinicar');
    placar.appendChild(btn_reinicar);
    btn_reinicar.addEventListener('click',()=>{location.reload();})
})











