const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

/*CONFERINDO SE JÁ HÁ ITENS NO LOCALSTORAGE*/
const itens = JSON.parse(localStorage.getItem('itens')) || []
//devo usar o JSON.parse para transformar de volta a string em obj

/*PEGANDO CADA ELEMENTO ARMAZENADO NO LOCALSTORAGE PARA RECARREGÁ-LOS NA PAG*/
itens.forEach((elemento) => {
    criaElemento(elemento) //agora só preciso chamar a função para que o que está no lS apareça na tela.
})

/*PASSANDO OS DADOS PARA A FUNÇÃO criaElemento*/
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    /*VERIFICANDO PRIMEIRO SE AQUELE ITEM JÁ EXISTE*/
    const existe = itens.find(elemento => elemento.nome === nome.value)

    /*CRIANDO O OBJ*/
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }
    
    /*CRIANDO UM ID pro item*/
    if (existe) {
        itemAtual.id = existe.id
        //se o id existe continua o mesmo
        
        atualizaElemento(itemAtual)

        /*Atualizando um item do LocalStorage*/
        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = itens.length
        //se nao, cria um novo a partir do tamanho no array

        /*CHAMANDO A FUNÇÃO*/
        criaElemento(itemAtual) //ele deixa de passar os dois paramentros e passa o obj que já é o conjunto dos dois

        /*ARMAZENANDO DADOS NO LOCALSTORAGE*/
        itens.push(itemAtual)
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(itemAtual) {

    /*CRIANDO ELEMENTOS VIA JS*/
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = itemAtual.quantidade
    //colocando dinamicamente o id no html
    numeroItem.dataset.id = itemAtual.id

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += itemAtual.nome

    lista.appendChild(novoItem)
}

function atualizaElemento(itemAtual) {
    //Busco o strong pelo ID e atualizo a quantidade apenas no HTML (falta atualizar no lS)
    document.querySelector("[data-id='"+itemAtual.id+"']").innerHTML = itemAtual.quantidade
}