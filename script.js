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

