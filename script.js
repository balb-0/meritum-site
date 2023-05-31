const midiasExpanded = window.document.querySelector('.saibamais-servicos-midia')
const fecharMidias = window.document.querySelector('.fechar-midia')
const anunciosExpanded = document.querySelector('.saibamais-servicos-anuncios')
const fecharAnuncios = document.querySelector('.fechar-trafego')
const seoExpanded = document.querySelector('.saibamais-servicos-seo')
const fecharSeo = document.querySelector('.fechar-seo')
let body = document.querySelector('.html')



midiasExpanded.addEventListener('click', () => {
    window.document.querySelector('.midias-expanded').setAttribute('style', 'display: flex')
    body.classList.add('block-scroll')
})

fecharMidias.addEventListener('click', () => {
    window.document.querySelector('.midias-expanded').setAttribute('style', 'display: none')
    body.classList.remove('block-scroll')
})

anunciosExpanded.addEventListener('click', () => {
    window.document.querySelector('.trafego-expanded').setAttribute('style', 'display: flex')
    body.classList.add('block-scroll')
})

fecharAnuncios.addEventListener('click', () => {
    window.document.querySelector('.trafego-expanded').setAttribute('style', 'display: none')
    body.classList.remove('block-scroll')

})

seoExpanded.addEventListener('click', () => {
    window.document.querySelector('.seo-expanded').setAttribute('style', 'display: flex')
    body.classList.add('block-scroll')
})

fecharSeo.addEventListener('click', () => {
    window.document.querySelector('.seo-expanded').setAttribute('style', 'display: none')
    body.classList.remove('block-scroll')
})


const lista = window.document.querySelector(".lista")
const toggle = window.document.querySelector(".toggle")
const home = window.document.querySelector('.home_close')
const sobre = window.document.querySelector('.sobre_close')
const servicos = window.document.querySelector('.servicos_close')
const contato = window.document.querySelector('.contato_close')




toggle.addEventListener('click', () => {
    const visivel = lista.getAttribute('data-visible')
    
    if (visivel === "false") {
        lista.setAttribute('data-visible', true)
        toggle.setAttribute('aria-expanded', true)
    } else {
        lista.setAttribute('data-visible', false)
        toggle.setAttribute('aria-expanded', false)
        
    }
})

home.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

sobre.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

servicos.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

contato.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

const menuItems = document.querySelectorAll('.navega a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scroll);
})
 
function scroll(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scrollTo({
        left: 0,
        top: to - 107,
        behavior: "smooth"
    });
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('.my-div').style.backgroundColor = 'white'; 
}