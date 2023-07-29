const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = []

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

    //transformamos em um objeto para montar um grupo de infos
    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    //criamos um array e inserimos cada novo obj lá dentro
    itens.push(itemAtual)

    //depois passamos esse obj para string com json, para que o lS consiga ler.
    localStorage.setItem('item', JSON.stringify(itens))
}