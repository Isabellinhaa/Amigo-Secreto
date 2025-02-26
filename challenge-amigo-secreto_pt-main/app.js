let Amigos = [];


// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

function adicionarAmigo(){
    let Addnome = document.querySelector('input').value;

    if (Addnome == ''){
        alert('Por Favor, insira um nome');
    }else {
        Amigos.push(Addnome);
        exibirAmigo();
        limparCampo();
    }
}

function exibirAmigo(){
    let lista = document.getElementById("resultado");
    lista.style.color = "black";
    lista.innerHTML = 'Lista de Amigos <br>' + Amigos.join('<br>');

}

function limparCampo(){
    Addnome = document.querySelector('input');
    Addnome.value = '';
}

function atualizarLista(){
    let lista = document.getElementById("resultado"); //Obter o elemento da lista, puxei a lista
    lista.innerHTML = ''; //limpo a lista antes de add mais itens

    //for (inicializador i = 0 -> começa lendo do 1 indice; condição-saída i < Amigos.length percorro toda a lista até o fim; expressão-final i++ Em cada iteração, o valor aumenta 1)
    for (let i = 0; i < Amigos.length; i++) {
        let li = document.createElement('li');// Cria um novo item de lista
        li.textContent = Amigos[i]; // Define o texto do item como o nome do amigo
        lista.appendChild(li); // Adiciona o item à lista na página
    }
}

function sortearAmigo(){
    if(Amigos.length == 0){
        alert('A lista de amigos está vazia!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * Amigos.length); //Para sortear um número aleatório entre 0 e o comprimento do array Amigos, você deve multiplicar Math.random() pelo número de elementos na lista (Amigos.length), e então arredondar para baixo usando Math.floor() para garantir que o número sorteado seja um índice válido.
    let nomeEscolhido = Amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = 'O Amigo Sorteado é: ' + nomeEscolhido;

    // exibe o nome sorteado na tela com fundo escuro
    let overlay = document.getElementById("overlay");
    let sorteadoNome = document.getElementById("sorteadoNome");

    sorteadoNome.textContent = nomeEscolhido;  // Define o nome sorteado
    overlay.style.display = "flex";  // Exibe a tela de fundo

    // para esconder o overlay após alguns segundos (exemplo: 3 segundos)
    setTimeout(function () {
        overlay.style.display = "none";
    }, 3000);
}