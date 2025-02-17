import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // Importe useParams
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Estilos do Swiper
import SwiperCore from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
console.log(Autoplay)
// Inicializa os módulos do Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

export const RentalInfo = () => {
  const [rental, setRental] = useState(null);
  const [images, setImages] = useState([]);

  // Captura o parâmetro "id" da URL
  const { id } = useParams();

  // Função para buscar os dados do aluguel pelo ID
  const getRentalById = async (id) => {
    // Simulação de uma requisição assíncrona
    /* const response = await fetch(`/api/rentals/${id}`);
    const data = await response.json();
    return data; */
    return {
        id: 1,
        imgSrc: ["https://silver-umbrella-jjpxpp7rgvrhq776-5173.app.github.dev/public/5-1.jpg"],
        status: "Venda",
        type: "Casa",
        price: "500,000",
        title: "Casa com 3 quartos",
        location: "São Paulo, SP",
        sqft: "200m²",
        bed: "3 Quartos",
        bath: "2 Banheiros",
    }
  };

  // Efeito para carregar os dados do aluguel
  useEffect(() => {
    if (id) {
      getRentalById(id).then((rentalData) => {
        setRental(rentalData);
        setImages(rentalData.imgSrc);
      });
    }
  }, [id]); // Executa sempre que o "id" mudar

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Carrossel de Imagens com Swiper */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <div className="col-md-15 animated fadeIn">
                <Swiper
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  className="header-carousel"
                >
                  {images.map((imageSrc, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="image-lista-carrossel w-100"
                        src={imageSrc}
                        alt={`Imagem ${index + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Detalhes do Aluguel */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" id="com-detalhe">
            {rental ? (
              <>
                <h1 className="mb-4">{rental.title}</h1>
                <p className="mb-4">{rental.description || ""}</p>
                <p><i className="fa fa-cart-plus text-primary me-3"></i>R$ {rental.price}</p>
                <p><i className="fa fa-map text-primary me-3"></i>{rental.location}</p>
                <p><i className="fa fa-map-pin text-primary me-3"></i>Setor {rental.sector}</p>
                <p><i className="fa fa-ruler-combined text-primary me-3"></i>{rental.sqft} mt²</p>
                <p><i className="fa fa-bed text-primary me-3"></i>{rental.bed} quartos</p>
                <p><i className="fa fa-bath text-primary me-3"></i>{rental.bath} banheiros</p>
                <a className="btn btn-primary py-3 px-5 mt-3" href="">Fale com o proprietário</a>
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

