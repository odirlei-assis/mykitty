var texto = 'A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo! Derrubar arvores da natureza é muito lucrativo!A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!';

function escreverTexto(texto,idElemento,tempo){
    var caracter = texto.split('').reverse();
    var digitador = setInterval(function () {
        if (!caracter.length) return clearInterval(digitador);
        var proximo = caracter.pop();
        document.getElementById(idElemento).innerHTML += proximo;
        document.getElementById(idElemento).scrollTo(0, 1000);
    }, tempo);

}

escreverTexto(texto,'texto',100);
