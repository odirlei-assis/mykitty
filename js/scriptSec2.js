async function lerCSV(url) {
    const response = await fetch(url); // Faz a requisição para obter o arquivo CSV
    const data = await response.text(); // Converte a resposta para texto
    const frases = data.split(';'); // Divide o texto em frases separadas por ';'
    return frases.map(frase => frase.trim()); // Remove espaços em branco extras ao redor de cada frase
}

function escolherFraseAleatoria(frases, exibidasIndices) {
    // Filtra os índices das frases que ainda não foram exibidas
    const indicesNaoExibidos = frases.map((_, index) => index).filter(index => !exibidasIndices.includes(index));
    
    // Se todas as frases já foram exibidas, reseta a lista de índices exibidos e escolhe novamente
    if (indicesNaoExibidos.length === 0) {
        localStorage.setItem('exibidasIndices', JSON.stringify([])); // Reseta a lista de índices exibidos
        return escolherFraseAleatoria(frases, []); // Chama recursivamente para escolher uma nova frase
    }
    
    // Escolhe aleatoriamente um índice não exibido
    const indiceAleatorio = indicesNaoExibidos[Math.floor(Math.random() * indicesNaoExibidos.length)];
    
    // Retorna a frase escolhida e seu índice
    return { frase: frases[indiceAleatorio], indice: indiceAleatorio };
}

function mostrarFrase() {
    const hoje = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato YYYY-MM-DD
    const ultimaExibicao = localStorage.getItem('ultimaExibicao'); // Obtém a última data de exibição armazenada
    
    // Verifica se a frase já foi exibida hoje
    if (ultimaExibicao === hoje) {
        alert("Amor, você já visualizou a frase de hoje. Te amo!");
        return;
    }
    
    // Chama a função para ler o arquivo CSV
    lerCSV('./arquivos/frases.csv').then(frases => {
        const exibidasIndices = JSON.parse(localStorage.getItem('exibidasIndices')) || []; // Obtém os índices das frases já exibidas
        const { frase, indice } = escolherFraseAleatoria(frases, exibidasIndices); // Escolhe uma frase aleatória que ainda não foi exibida
        
        document.getElementById('frase').innerHTML = frase + "... <br><br>Nunca se esqueça que eu te amo mais!!!!";

        // Registra o índice da frase exibida
        exibidasIndices.push(indice);
        localStorage.setItem('exibidasIndices', JSON.stringify(exibidasIndices)); // Atualiza os índices das frases exibidas no localStorage
        localStorage.setItem('ultimaExibicao', hoje); // Armazena a data de última exibição
    }).catch(error => {
        console.error('Erro ao ler o arquivo CSV:', error); // Exibe um erro se houver problema ao ler o CSV
    });
}

// function trocarBackground() {
//     // Número total de imagens na pasta
//     const totalImagens = 7; // Ajuste conforme o número total de imagens que você possui

//     // Gera um número aleatório entre 1 e o total de imagens
//     const numeroAleatorio = Math.floor(Math.random() * totalImagens) + 1;

//     // Caminho da imagem com o número aleatório
//     const caminhoImagem = './img/fotos/img' + numeroAleatorio + '.jpeg'; // Altere o formato se for png, por exemplo

//     // Seleciona a section pelo id
//     const secao = document.getElementById('sec_2');

//     // Altera o background-image da seção
//     secao.style.backgroundImage =  'linear-gradient(rgba(0, 0, 0, 80%), rgba(0, 0, 0, 80%)),url(' + caminhoImagem + ')';
// }