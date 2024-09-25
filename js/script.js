function mostrarSecao(idSecao) {
    const secaoAtiva = document.querySelector('.entrada');
    const proximaSecao = document.getElementById(idSecao);

    if (secaoAtiva != proximaSecao) {
        proximaSecao.classList.add('entrada');
        proximaSecao.classList.remove('saida');

        secaoAtiva.classList.remove('entrada');
        secaoAtiva.classList.add('saida');
    }
}