let amigos = [];

alert("Para remover um nome, basta clicar em cima dele, na área de Amigos Incluídos!");

// document.getElementsByClassName('friends__title').innerHTML = "Amigos incluídos <br> Para excluir um nome, basta clicar em cima dele!";

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    let listaAmigos = document.getElementById('lista-amigos');

    if(amigos.includes(amigo.value)) {
        alert('Esse amigo já foi incluído!');
        
    } else if (amigo.value == '') {
        alert('Insira um amigo!')
    } else {
        amigos.push(amigo.value);

        document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos">${amigos}</p>`; //adiciona a lista no front no campo Amigos incluídos
    }

    console.log(listaAmigos);
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length <=2) {
        alert('Adicione mais amigos!');
    } else {
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for(let i = 0; i < amigos.length; i++) {

            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {excluirAmigo(i)});

        lista.appendChild(paragrafo);
    }
}