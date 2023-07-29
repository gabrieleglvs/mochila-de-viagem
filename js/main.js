const form = document.getElementById('novoItem')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    //passando para function o nome e a quantidade
    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    /*CRIANDO ELEMENTOS VIA JS*/
    //elementos criados pelo js são obj
    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li') //criei um novo item
    novoItem.classList.add("item") //adicionei a classe "item" a esse novo item

    const numeroItem = document.createElement('strong') //a tag strong recebe a quantidade
    numeroItem.innerHTML = quantidade

    //1º add o segundo elemento dentro desse, basicamente vai ficar assim: <li class="item"><strong>7</strong></li>
    //appendChild eu adiciono um obj dentro do outro
    novoItem.appendChild(numeroItem)

    //2º reafirmo a construção do elemento e adiciono o conteúdo.
    novoItem.innerHTML += nome

    //pego a ul
    const lista = document.getElementById('lista')
    //adiciono o novo li
    lista.appendChild(novoItem)
}