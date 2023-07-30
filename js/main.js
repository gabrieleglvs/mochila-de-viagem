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
    
    /*CRIANDO O OBJ*/
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    /*CHAMANDO A FUNÇÃO*/
    criaElemento(itemAtual) //ele deixa de passar os dois paramentros e passa o obj que já é o conjunto dos dois

    /*ARMAZENANDO DADOS NO LOCALSTORAGE*/
    itens.push(itemAtual)

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

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += itemAtual.nome

    lista.appendChild(novoItem)
}