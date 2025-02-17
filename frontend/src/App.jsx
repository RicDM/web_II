import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="container-xxl bg-white p-0">
          <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                  <span class="sr-only">Carregando...</span>
              </div>
          </div>

       {/*  <!-- Navbar start --> */}
        <div class="container-fluid nav-bar bg-transparent" id="com-navbar">
           {/*  <!-- Add for code --> */}
        </div>
        {/* <!-- Navbar End -->


        <!-- Header Start --> */}
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Encontre o <span class="text-primary">imóvel</span> de forma fácil e segura.</h1>
                    <p class="animated fadeIn mb-4 pb-2">Conectamos você ao lar perfeito com praticidade, agilidade e a melhor experiência de aluguel.</p>
                    <a href="#atalho" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Começar</a>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <div class="owl-carousel header-carousel">
                        <div class="owl-carousel-item">
                            {/* <img class="img-fluid" src="img/carousel-1.jpg" alt=""> */}
                        </div>
                        <div class="owl-carousel-item">
                           {/*  <img class="img-fluid" src="img/carousel-2.jpg" alt=""> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End -->


        <!-- Search Start --> */}
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container" id="com-search">
               {/*  <!-- For code  --> */}
            </div>
        </div>
       {/*  <!-- Search End -->


        <!-- Category Start --> */}
        <div class="container-xxl py-5">
            <div class="container" id="com-propstypes">
               {/*  <!-- Add for code --> */}
            </div>
        </div>
        {/* <!-- Category End -->


        <!-- Propriedade List Start --> */}
        <div id ="atalho" class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-3">Imoveis Disponíveis</h1>
                            <p>Explore nossa seleção de imóveis disponíveis para aluguel e encontre o lar perfeito para você. Cada opção é cuidadosamente selecionada para atender às suas necessidades e estilo de vida.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul class="nav nav-pills d-inline-flex justify-content-end mb-5" id="filter-list">
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="property-list" class="row g-4">
                        {/* <!-- add for code --> */}
                    </div>
                    <div class="col-12 text-center">
                        <a class="btn btn-primary py-3 px-5" href="property-list.html">Mostrar mais imoveis</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Propriedade List End -->


        <!-- Call to Action Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded p-3">
                    <div class="bg-white rounded p-4" style="border: 1px dashed rgba(0, 185, 142, .3)">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                               {/*  <img class="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""> */}
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div class="mb-4">
                                    <h1 class="mb-3">Entre em contato com nossos corretores certificados</h1>
                                    <p>Entre em contato e aproveite a experiência de nossos corretores certificados para encontrar seu imóvel. </p>
                                </div>
                                <a href="" class="btn btn-primary py-3 px-4 me-2"><i class="fa fa-phone-alt me-2"></i>Entre em contato</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End -->


        <!-- Team Start --> */}
        <div class="container-xxl py-5">
            <div class="container" id="com-corretores">
            </div>
        </div>
       {/*  <!-- Team End -->


        <!-- Testimonial Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h1 class="mb-3">Nossos clientes dizem!</h1>
                    <p>Descubra o que nossos clientes têm a dizer sobre suas experiências. Suas opiniões refletem a qualidade e confiança que oferecemos em cada serviço!</p>
                </div>
                <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="testimonial-item bg-light rounded p-3">
                        <div class="bg-white border rounded p-4">
                            <p>Fiquei impressionado com a praticidade do site. Em poucos cliques, encontrei uma casa perfeita para minhas necessidades. A experiência foi muito tranquila!</p>
                            <div class="d-flex align-items-center">
                                {/* <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-5.jpg" style="width: 45px; height: 45px;"> */}
                                <div class="ps-3">
                                    <h6 class="fw-bold mb-1">Wesley</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded p-3">
                        <div class="bg-white border rounded p-4">
                            <p>O processo foi super simples e transparente. Consegui alugar uma casa incrível na localização que eu queria, e tudo de forma rápida e segura. Recomendo!</p>
                            <div class="d-flex align-items-center">
                               {/*  <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style="width: 45px; height: 45px;"> */}
                                <div class="ps-3">
                                    <h6 class="fw-bold mb-1">Pedro</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded p-3">
                        <div class="bg-white border rounded p-4">
                            <p>Excelente variedade de imóveis e ótimo suporte ao cliente. Encontrei exatamente o que procurava e o atendimento foi impecável. Melhor experiência de aluguel que já tive!</p>
                            <div class="d-flex align-items-center">
                               {/*  <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style="width: 45px; height: 45px;"> */}
                                <div class="ps-3">
                                    <h6 class="fw-bold mb-1">Gustavo</h6>
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
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5 d-flex justify-content-around">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Entre em contato</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Folha 17, Marabá - PA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>(94) 99234-5678</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>AlugueAqui@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Links rápidos</h5>
                        <a class="btn btn-link text-white-50" href="">Sobre nós</a>
                        <a class="btn btn-link text-white-50" href="">Contatos</a>
                        <a class="btn btn-link text-white-50" href="">Nossos serviçoes</a>
                        <a class="btn btn-link text-white-50" href="">Política de Privacidade</a>
                        <a class="btn btn-link text-white-50" href="">Termos e condições</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Newsletter</h5>
                        <p>Insira seu e-mail para ficar por dentro das novidades e receber mais informações!</p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            {/* <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"> */}
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Inscreva-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End -->


        <!-- Back to Top --> */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
    </div>
    </>
  )
}

export default App
