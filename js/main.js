const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    //passando para function o nome e a quantidade
    criaElemento(nome.value, quantidade.value)

    //limpando o form depois do envio dos dados
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

    //1º add o segundo elemento dentro desse, basicamente vai ficar assim: <li class="item"><strong>7</strong></li>
    //appendChild eu adiciono um obj dentro do outro
    novoItem.appendChild(numeroItem)

    //2º reafirmo a construção do elemento e adiciono o conteúdo.
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}