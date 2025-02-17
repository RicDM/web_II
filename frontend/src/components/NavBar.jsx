export const NavBar = () => {
    return <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
        <div className="icon p-2 me-2">
            {/* <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style="width: 30px; height: 30px;"> */}
        </div>
        <h1 className="m-0 text-primary">Alugue Aqui</h1>
    </a>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">Inicio</a>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">imoveis</a>
                <div className="dropdown-menu rounded-0 m-0">
                    <a href="property-list.html" className="dropdown-item">Lista de imoveis</a>
                    <a href="property-type.html" className="dropdown-item">Tipos de imoveis</a>
                    <a href="property-agent.html" className="dropdown-item">Corretores</a>
                </div>
            </div>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</a>
                <div className="dropdown-menu rounded-0 m-0">
                    <a href="testimonial.html" className="dropdown-item">Comentarios</a>
                    <a href="404.html" className="dropdown-item">404 Error</a>
                </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contato</a>
        </div>
        <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Adicionar Imoveis</a>
    </div>
</nav>
}