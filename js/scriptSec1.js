const texto = 'A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo! Derrubar arvores da natureza é muito lucrativo!A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!';
const texto1 = 'Oi amor!... Por onde começar?... Incrivelmente, é mais fácil falar pessoalmente com você do que escrever algo!...  Acho que começar pelo começo é uma boa ideia, não acha?... Ambos sabemos que, quando nos conhecemos, não esperávamos nada e não estávamos buscando nada. Mesmo assim, mesmo com isso em mente, tomamos atitudes que nos trouxeram até aqui. Enfrentamos nossos medos e incertezas sem saber onde isso nos levaria, e hoje o que almejo contigo me dá até medo!... Eu desejo tanto que tudo dê certo que tenho medo de que não dê!... Busquei referências em grandes mentes para tentar me ajudar a explicar o que sinto por você. Platão diz que o amor é um impulso que nos leva a buscar a perfeição, Aristóteles diz que é uma virtude que se manifesta no cuidado e no desejo de promover o bem-estar do outro, Freud viu o amor como uma força motivadora e poderosa que impulsiona o comportamento humano, Shakespeare via o amor como uma força capaz de inspirar grandes feitos e sacrifícios, Rumi viu o amor como uma força transformadora que pode elevar a alma humana além das preocupações terrenas. Depois de ler tudo isso, acredito que todos possam estar certos. Entendi que nenhuma palavra será capaz de explicar, acho que a única forma de você entender o que sinto seria se pudesse ver seu sorriso através dos meus olhos, sentir seu cheiro pelo meu nariz, vivenciar o que sinto estando dentro do meu coração. Só assim saberia o quanto é especial para mim!... Amo o que estamos construindo, amo como você deseja que a gente dê certo, amo como você busca ser melhor a cada dia. Acho que posso resumir tudo isso em um simples "eu amo você!"... Enfim... não vou perguntar se quer namorar comigo pois já namoramos antes mesmo de termos tido consciência disso!... Posso não ter sido seu primeiro amor, mas se você quiser, serei o último!... Quero saber se você quer planejar o resto da sua vida ao lado da minha???';

function escreverTexto(texto,idElemento,tempo){
    var caracter = texto.split('').reverse();
    var digitador = setInterval(function () {
        if (!caracter.length) return clearInterval(digitador);
        var proximo = caracter.pop();
        document.getElementById(idElemento).innerHTML += proximo;
        document.getElementById(idElemento).scrollTo(0, 5000);
    }, tempo);

}

// var digitador;
// function escreverTexto(texto, idElemento, tempo) {
//     var caracter = texto.split('').reverse();

//     digitador = setInterval(function () {
//         if (!caracter.length) {
//             clearInterval(digitador);
//             return;
//         }
//         var proximo = caracter.pop();
//         document.getElementById(idElemento).innerHTML += proximo;
//         document.getElementById(idElemento).scrollTo(0, 5000); // Mantém o scroll atualizado
//     }, tempo);
// }

// function apagarTexto(idElemento) {
//     console.log("apagar");
    
//     clearInterval(digitador); // Para o intervalo do digitador
//     document.getElementById(idElemento).innerHTML = ''; // Reseta o conteúdo
// }

const glass = document.querySelector('.box_glass');
if (glass) {
    setTimeout(() => escreverTexto(texto1, 'texto', 80), 10000);
}
