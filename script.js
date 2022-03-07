function reload() {
    window.location.reload();
}

function DOM(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "É a representação de uma página web, de forma que a partir de uma linguagem de script, como o JavaScript, a estrutura dessa página possa ser alterada, assim como seu estilo e conteúdo."
}

function windowF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "Objeto <span>window</span>: janela que contém o elemento DOM / navegador."
}

function documentF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "Objeto <span>document</span>: documento DOM carregado na janela representada pelo objeto window."
}

function getElementByIdF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>getElementById</span>: busca um elemento da página web com o uso do atributo id do elemento."
}

function getElementsByClassNameF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>getElementsByClassName</span>: retorna um array dos elementos com a mesma tag."
}

function querySelectorF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>querySelector</span>: busca o primeiro elemento em um lugar escolhido (geralmente no documento) que possua um determinado seletor (classes, tags, ids)."
}

function querySelectorAllF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>querySelectorAll</span>: busca todas as correspondências de determinado seletor em um lugar escolhido (geralmente no documento), retornando-os em forma de NodeList."
}

function elementF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "O objeto <span>Element</span> representa um elemento HTML, como p, div, a, table ou qualquer outro elemento HTML e possui inúmeras propriedades e métodos que podem ser usados nos mesmos, como esses acima e abaixo."
}

function innerHTMLF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>innerHTML</span>:           retorna o conteúdo HTML de um elemento, incluindo espaçamentos e tags, permitindo que ele seja alterado."
}

function innerTextF(){
    const dom  = document.querySelector("div p")
    dom.innerText = "<span>innerText</span>:           retorna apenas o conteúdo de texto do elemento e todos os seus filhos, sem espaçamento de texto oculto e tags CSS, exceto os elementos <script> e <style>."
}

function textContentF(){
    const dom  = document.querySelector("div p")
    dom.textContent = "<span>textContent</span>:        retorna o conteúdo de texto do elemento e todos os descendentes, com espaçamento e texto oculto CSS, mas sem tags."
}

function nodeListF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>NodeList</span>: todos os elementos no HTML são considerados nós, ela é uma lista de nós do documento. A NodeList pode ser uma coleção ativa, ou seja, se algum elemento for adicionado ou removido do DOM, as alterações serão aplicadas automaticamente."
}

function arrayF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>array</span>: é uma variável especial em JavaScript, que pode armazenar elementos arbitrários e fazer uso de diversos métodos como push(), pop(), slice() e join(). <br>Uma NodeList pode ser transformada em um array utilizando Array.from() ou com operador de propagação (...)"
}

function documentCreateElementF(){
    const dom  = document.createElement("p")
    dom.innerHTML = "<span>createElement</span>: método que cria um nó de elemento."
    document.querySelector("div").appendChild(dom);
}

function elementAppendChildF(){
    const dom  = document.querySelector("div p")
    dom.innerHTML = "<span>appendChild</span>: método que anexa um nó (elemento) como o último filho de um elemento."
}