import { NavBar } from "../components/NavBar"
import { SearchRental } from "../components/SearchRental"
import headerImg from "../img/header.jpg"

export const Contact = () => {
    return <div class="container-xxl bg-white p-0">
    {/* <!-- Spinner Start --> */}
    {/*<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
         <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span class="sr-only">Carregando...</span>
        </div>
    </div> */}
    {/*<!-- Spinner End -->


     <!-- Navbar start --> */}
    <div class="container-fluid nav-bar bg-transparent" id="com-navbar">
        <NavBar/>
    </div>
    {/* <!-- Navbar End -->


    <!-- Header Start --> */}
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Contatos</h1> 
                    <nav aria-label="breadcrumb animated fadeIn">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><a href="index.html">Início</a></li>
                        <li class="breadcrumb-item text-body active" aria-current="page">Contatos</li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
                <img class="img-fluid" src={headerImg} alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Header End -->


    <!-- Search Start --> */}
<div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
        <div class="container" id="com-search">
           <SearchRental/>
        </div>
    </div>
    {/* <!-- Search End -->

    <!-- Contact Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 class="mb-3">Nossos contatos</h1>
                <p>Entre em contato conosco para esclarecer suas dúvidas ou solicitar nossos serviços. Estamos sempre disponíveis para oferecer o melhor atendimento possível para você!</p>
            </div>
            <div class="row g-4">
                <div class="col-12">
                    <div class="row gy-4">
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                    <div class="icon me-3" style={{width: "45px", height: "45px"}}>
                                        <i class="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <span>Folha 17, Marabá - PA</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                    <div class="icon me-3" style={{width: "45px", height: "45px"}}>
                                        <i class="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <span>AlugueAqui@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                    <div class="icon me-3" style={{width: "45px", height: "45px"}}>
                                        <i class="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>(94) 99234-5678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15845.745616624137!2d-49.110762!3d-5.368759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bdb4d86e891a27%3A0x0!2zTWVldGluZyBvZiB0aGUgUml2ZXM!5e0!3m2!1spt-BR!2sbr!4v1695228900000!5m2!1spt-BR!2sbr"
                        frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div class="col-md-6">
                    <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <p class="mb-4">Preencha o formulário abaixo para entrar em contato conosco. Envie suas dúvidas, sugestões ou solicite mais informações sobre as casas disponíveis para alugar. Nossa equipe receberá sua mensagem por e-mail e retornará o mais breve possível!</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Seu nome</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Seu email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                        <label for="subject">Titulo da mensagem</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                        <label for="message">Messagem</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Enviar mensagem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End -->


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
                    <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
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

}