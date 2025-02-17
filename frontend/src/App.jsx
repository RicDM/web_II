import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { SearchRental } from './components/SearchRental'
import { RentalTypes } from './components/RentalTypes'
import { RentalList } from './components/RentalList'

import carousel1 from "./img/carousel-1.jpg"
import carousel2 from "./img/carousel-2.jpg"

import testimonial5 from "./img/testimonial-5.jpg"
import testimonial3 from "./img/testimonial-2.jpg"
import testimonial2 from "./img/testimonial-3.jpg"
import call from "./img/call-to-action.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <div className="container-xxl bg-white p-0">
          {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" style={{width: '3rem', height: "3rem"}} role="status">
                  <span className="sr-only">Carregando...</span>
              </div>
          </div> */}
        
       {/*  <!-- Navbar start --> */}
        <div className="container-fluid nav-bar bg-transparent" id="com-navbar">
           <NavBar/>
        </div>
        {/* <!-- Navbar End -->


        <!-- Header Start --> */}
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Encontre o <span className="text-primary">imóvel</span> de forma fácil e segura.</h1>
                    <p className="animated fadeIn mb-4 pb-2">Conectamos você ao lar perfeito com praticidade, agilidade e a melhor experiência de aluguel.</p>
                    <a href="#atalho" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Começar</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src={carousel1} alt=""/>
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src={carousel2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End -->


        <!-- Search Start --> */}
        <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div className="container" id="com-search">
               <SearchRental/>
            </div>
        </div>
       {/*  <!-- Search End -->


        <!-- Category Start --> */}
        <div className="container-xxl py-5">
            <div className="container" id="com-propstypes">
               <RentalTypes/>
            </div>
        </div>
        {/* <!-- Category End -->


        <!-- Propriedade List Start --> */}
        <div id ="atalho" className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Imoveis Disponíveis</h1>
                            <p>Explore nossa seleção de imóveis disponíveis para aluguel e encontre o lar perfeito para você. Cada opção é cuidadosamente selecionada para atender às suas necessidades e estilo de vida.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5" id="filter-list">
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="property-list" className="row g-4">
                       <RentalList/>
                    </div>
                    <div className="col-12 text-center">
                        <a className="btn btn-primary py-3 px-5" href="property-list.html">Mostrar mais imoveis</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Propriedade List End -->


        <!-- Call to Action Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src={call} alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Entre em contato com nossos corretores certificados</h1>
                                    <p>Entre em contato e aproveite a experiência de nossos corretores certificados para encontrar seu imóvel. </p>
                                </div>
                                <a href="" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Entre em contato</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End -->


        <!-- Team Start --> */}
        <div className="container-xxl py-5">
            <div className="container" id="com-corretores">
            </div>
        </div>
       {/*  <!-- Team End -->


        <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Nossos clientes dizem!</h1>
                    <p>Descubra o que nossos clientes têm a dizer sobre suas experiências. Suas opiniões refletem a qualidade e confiança que oferecemos em cada serviço!</p>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Fiquei impressionado com a praticidade do site. Em poucos cliques, encontrei uma casa perfeita para minhas necessidades. A experiência foi muito tranquila!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial5} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Wesley</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>O processo foi super simples e transparente. Consegui alugar uma casa incrível na localização que eu queria, e tudo de forma rápida e segura. Recomendo!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial2} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Pedro</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Excelente variedade de imóveis e ótimo suporte ao cliente. Encontrei exatamente o que procurava e o atendimento foi impecável. Melhor experiência de aluguel que já tive!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial3} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Gustavo</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End -->
        

        <!-- Footer Start --> */}
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5 d-flex justify-content-around">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Entre em contato</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Folha 17, Marabá - PA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>(94) 99234-5678</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>AlugueAqui@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Links rápidos</h5>
                        <a className="btn btn-link text-white-50" href="">Sobre nós</a>
                        <a className="btn btn-link text-white-50" href="">Contatos</a>
                        <a className="btn btn-link text-white-50" href="">Nossos serviçoes</a>
                        <a className="btn btn-link text-white-50" href="">Política de Privacidade</a>
                        <a className="btn btn-link text-white-50" href="">Termos e condições</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Insira seu e-mail para ficar por dentro das novidades e receber mais informações!</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            {/* <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"> */}
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Inscreva-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End -->


        <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
    </>
  )
}

export default App
