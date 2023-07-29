const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

/*CONFERINDO SE JÁ HÁ ITENS NO LOCALSTORAGE*/
const itens = JSON.parse(localStorage.getItem('itens')) || []
//devo usar o JSON.parse para transformar de volta a string em obj

/*PEGANDO CADA ELEMENTO ARMAZENADO NO LOCALSTORAGE PARA RECARREGÁ-LOS NA PAG*/
itens.forEach((elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

/*PASSANDO OS DADOS PARA A FUNÇÃO criaElemento*/
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    /*CRIANDO ELEMENTOS VIA JS*/
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    /*ARMAZENANDO DADOS NO LOCALSTORAGE*/
    
    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem('itens', JSON.stringify(itens))
}