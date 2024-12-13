getAllRentals().then(data => {

let elements = ""
const url = new URL(window.location.href);
url.pathname = 'property-list.html'

new Array(
    {
        name: "Casa",
        imgSrc: "img/icon-house.png",
        
    },
    {
        name: "Residencial",
        imgSrc: "img/icon-villa.png",
        
    },
    {
        name: "Apartamento",
        imgSrc: "img/icon-apartment.png",
        
    },
    {
        name: "Escritorio",
        imgSrc: "img/icon-housing.png",
        
    },
    {
        name: "Prédio",
        imgSrc: "img/icon-building.png",
        
    },
    {
        name: "Germinada",
        imgSrc: "img/icon-neighborhood.png",
        
    },
    {
        name: "Garagem",
        imgSrc: "img/icon-luxury.png",
        
    },
    {
        name: "Comercial",
        imgSrc: "img/icon-condominium.png",
        
    }
).forEach(propsType => elements+=`
    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <a class="cat-item d-block bg-light text-center rounded p-3" href=${(() => {
            url.searchParams.set('type', propsType.name)
            return url
        })()}>
            <div class="rounded p-4">
                <div class="icon mb-3">
                    <img class="img-fluid" src=${propsType.imgSrc} alt="Icon">
                </div>
                <h6>${propsType.name}</h6>
                <span>${data.filter(prop => prop["type"] == propsType.name).length} propriedades</span>
            </div>
        </a>
    </div>`
)

    const container = document.querySelector("#com-propstypes")
    container.appendChild(genereteAgentTitle())
    const div = document.createElement('div');
    div.classList.add('row', 'g-4')
    div.innerHTML = elements
    container.appendChild(div)
})
function genereteAgentTitle() {
    const div = document.createElement('div');
    div.classList.add('text-center', 'mx-auto', 'mb-5', 'wow', 'fadeInUp')
    div.setAttribute('data-wow-delay', '0.1s');
    div.style = "max-width: 600px;"
    const h1 = document.createElement('h1');
    h1.classList.add('mb-3')
    h1.innerText = "Tipos de Propriedade"
    const p = document.createElement('p');
    p.innerText = "De apartamentos modernos a casas espaçosas, oferecemos uma variedade de imóveis para aluguel que atendem às suas necessidades. Explore nossas opções e descubra o lugar ideal para chamar de lar."
    div.appendChild(h1)
    div.appendChild(p)
    return div
}