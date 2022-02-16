let num = 0; 

function aumentar() {
    num++
    mostrartela()
}

function diminuir() {
    num--
    mostrartela()
}


function zerar() {
    num = 0
    mostrartela()
}

function mostrartela() {
    const p = document.querySelector("p");
    p.innerText = num
}
mostrartela


