//menu mobile

const btnMenuMobile = document.querySelector('.btn-mobile')
const menuMobile = document.querySelector('header nav')

function openMenu() {
    menuMobile.classList.toggle('ativo')
    btnMenuMobile.classList.toggle('ativo')
}

btnMenuMobile.addEventListener('click', openMenu)

//item produtos

const btnProdutos = document.querySelector('.toggle-item')
const produtosLista = document.querySelector('.produtos-lista')

function openProdutosLista() {
    produtosLista.classList.toggle('ativo')
}

function closeProdutosLista(event) {
    if (btnProdutos.firstElementChild !== event.target)
    produtosLista.classList.remove('ativo')

}

btnProdutos.addEventListener('click', openProdutosLista)
window.addEventListener('click', closeProdutosLista)

//slider imagens principal

const imgsPrincipal = document.querySelectorAll('.principal img')
let indice = 1

setInterval(() => {
       imgsPrincipal.forEach(img => img.classList.remove('ativo'))
       imgsPrincipal[indice].classList.add('ativo')
       ++indice;
       if (indice > imgsPrincipal.length - 1) indice = 0
}, 5000);