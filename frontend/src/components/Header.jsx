import React from 'react';
import { useLocation } from 'react-router-dom';
import headerImg from '../img/header.jpg';

export const Header = () => {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case '/':
        return ['Ínicio'];
      case '/newrental':
        return ['Ínicio', 'Páginas', 'Adicionar Imóveis'];
      case '/agents':
        return ['Ínicio', 'Páginas', 'Corretores'];
      case '/contact':
        return ['Ínicio', 'Páginas', 'Contatos'];
      case '/login':
        return ['Ínicio', 'Páginas', 'Login'];
      case '/404':
        return ['Ínicio', 'Páginas', 'Página não Encontrada'];
      case '/rentals':
        return ['Ínicio', 'Páginas', 'Lista de Imóveis'];
      case '/types':
        return ['Ínicio', 'Páginas', 'Tipo de Imóveis'];
      case '/singup':
        return ['Ínicio', 'Páginas', 'Cadastro'];
      case '/testimonials':
        return ['Ínicio', 'Páginas', 'Comentários'];
      default:
        return ['ínicio', 'Páginas', 'Não encontrado'];
    }
  };

  const breadcrumbs = getBreadcrumbs();
  
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">{breadcrumbs[2]}</h1> 
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="#"> {breadcrumbs[0]} </a></li>
              <li className="breadcrumb-item"><a href="#"> {breadcrumbs[1]} </a></li>
              <li className="breadcrumb-item text-body active" aria-current="page"> {breadcrumbs[2]} </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-6 animated fadeIn">
          <img className="img-fluid" src={headerImg} alt="Header Image"/>
        </div>
      </div>
    </div>
  );
};
