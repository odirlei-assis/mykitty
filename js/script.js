let podeTrocarSecao = true;

function mostrarSecao(idSecao) {
    if (!podeTrocarSecao) {
        return;
    }

    const secaoAtiva = document.querySelector('.entrada');
    const proximaSecao = document.getElementById(idSecao);

    if (secaoAtiva != proximaSecao) {
        proximaSecao.classList.add('entrada');
        proximaSecao.classList.remove('saida');

        secaoAtiva.classList.remove('entrada');
        secaoAtiva.classList.add('saida');

        const svgs = document.querySelectorAll('.nav_item svg');
        svgs.forEach(svg => svg.classList.remove('svg_ativo'));

        const svgAtivo = document.querySelector(`[onclick="mostrarSecao('${idSecao}')"] svg`);
        if (svgAtivo) {
            svgAtivo.classList.add('svg_ativo');
        }

        podeTrocarSecao = false;
        setTimeout(() => {
            podeTrocarSecao = true;
        }, 1500);
    }
}