const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
getRentalById(id).then(rental => {
    addImagesToCarousel(rental.imgSrc)
    addInformation(rental)
})
/* "status": "Recentes",
      "type": "Casa",
      "price": "1200",
      "title": "Casa na folha 31",
      "location": "Folha 31, Quadra 12, Lote 02, Nova Marabá",
      "sector": "Nova Marabá",
      "sqft": "120",
      "bed": "2",
      "bath": "2",
      "contact": "(94)987177380" */
function addInformation(rental) {
    const div = document.querySelector("#com-detalhe")
    div.innerHTML = `
    <h1 class="mb-4">${rental.title}</h1>
    <p class="mb-4">${rental.description || ""}</p>
    <p><i class="fa fa-cart-plus text-primary me-3"></i>R$ ${rental.price}</p>
    <p><i class="fa fa-map text-primary me-3"></i>${rental.location}</p>
    <p><i class="fa fa-map-pin text-primary me-3"></i>Setor ${rental.sector}</p>
    <p><i class="fa fa-ruler-combined text-primary me-3"></i>${rental.sqft} mt²</p>
    <p><i class="fa fa-bed text-primary me-3"></i>${rental.bed} quartos</p>
    <p><i class="fa fa-bath text-primary me-3"></i>${rental.bath} banheiros</p>
    <a class="btn btn-primary py-3 px-5 mt-3" href="">Fale com o proprietario</a>
                `
}
function addImagesToCarousel(images) {
    header = document.querySelector("#img-header")
    header.src = images.shift()
    images.forEach((imageSrc) => {
        // Cria o elemento <div> para cada item do carrossel
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('owl-carousel-item');

        // Cria o elemento <img> e define os atributos
        const carouselImg = document.createElement('img');
        carouselImg.classList.add('image-lista-carrossel');
        carouselImg.src = imageSrc;
        carouselImg.alt = "";  // Adicione um texto alternativo apropriado, se necessário

        // Adiciona a imagem ao item do carrossel
        carouselItem.appendChild(carouselImg);

        // Adiciona o item ao carrossel Owl Carousel
        $('.owl-carousel').owlCarousel('add', carouselItem).owlCarousel('update');
    });
}
