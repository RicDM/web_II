// Função para gerar dinamicamente os cards de propriedade
function generatePropertyList(properties) {
    const propertyList = document.getElementById('property-list');
    properties.forEach((property, index) => {
        const delay = 0.1 + (index * 0.2); // Ajusta o delay da animação
        const propertyItem = `
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${delay}s">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a href="detalhe.html?id=${property.id}"><img class="img-fluid image-lista" src="${property.imgSrc[0]}" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${property.status}</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.type}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">R$ ${property.price}</h5>
                        <a class="d-block h5 mb-2" href="detalhe.html?id=${property.id}">${property.title}</a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.sqft}</small>
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bed}</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bath}</small>
                    </div>
                </div>
            </div>
        `;
        propertyList.innerHTML += propertyItem;
    });
}
function changeFilterParams(newStatus) {
    // Cria um objeto URL baseado na URL atual
    const url = new URL(window.location.href);
    // Define ou altera o valor do parâmetro "status"
    url.searchParams.set('status', newStatus == 'Todas' ? "" : newStatus)
    console.log(url)
    window.location.href = url;
}
function changeFilterParams(newStatus) {
    // Cria um objeto URL baseado na URL atual
    const url = new URL(window.location.href);
    // Define ou altera o valor do parâmetro "status"
    url.searchParams.set('status', newStatus == 'Todas' ? "" : newStatus)
    console.log(url)
    window.location.href = url;
}
const urlParams = new URLSearchParams(window.location.search);
const statusOfList = urlParams.get('status') 
const typeOfList = urlParams.get('type')
const sectorOfList = urlParams.get('sector')
const statusFiltersNavPills = document.querySelector("#filter-list")
const statusFilters = ["Todas", "Top", "Recentes"]

statusFilters.forEach(statusFilter => {
    const statusFilterPill = document.createElement('li');
    statusFilterPill.classList.add('nav-item', 'me-2');
    const statusFilterPillLink = document.createElement('a');
    statusFilterPillLink.classList.add("btn", "btn-outline-primary");
    statusFilterPillLink.setAttribute('data-bs-toggle', 'pill');
    statusFilterPillLink.addEventListener("click", () => changeFilterParams(statusFilter))
    statusFilterPillLink.innerText = statusFilter
    statusFilterPill.appendChild(statusFilterPillLink);
    statusFiltersNavPills.appendChild(statusFilterPill)
})

getAllRentals(statusOfList, typeOfList, sectorOfList).then(data => { 
    //console.log(statusOfList, typeOfList, sectorOfList, data)
    const url = new URL(window.location.href)
    if (url.pathname == "/index.html") data = data.slice(0, 6)
    if (data.length == 0) {
        document.querySelector("#property-list-title").innerHTML = `
            <h1 class="mb-3">Sem Imoveis Disponíveis</h1>
            <p>Ainda não temos imoveis que correnpondem aos criterios da sua busca</p>
        `
        
     }
    
    generatePropertyList(data)
})
