import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import './Header.css';

import Logo from './assets/imagesEtLogo/images/logo1.webp';

function Header() {
  const location = useLocation();

  // Fonction pour déterminer si un lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Barre de navigation */}
      <Navbar className="bgBlue px-5" expand="lg" id="navbar">
        {/* Logo Nation Sound */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={Logo} alt="logo" id="logo" style={{ width: '100px', height: '100px' }} />
          </Navbar.Brand>
        </LinkContainer>
        {/* Bouton de bascule de la barre de navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bgWhite' />
        {/* Contenu de la barre de navigation */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="position-relative">
            {/* Lien vers la page d'accueil */}
            <Nav.Item className={isActive('/') ? 'active' : ''}>
              <LinkContainer to="/">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Accueil</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Concerts */}
            <Nav.Item className={isActive('/concerts') ? 'active' : ''}>
              <LinkContainer to="/concerts">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Concerts & Programmation</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Billetterie */}
            <Nav.Item className={isActive('/billetterie') ? 'active' : ''}>
              <LinkContainer to="/billetterie">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Billetterie</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Infos & Faq */}
            <Nav.Item className={isActive('/infos') ? 'active' : ''}>
              <LinkContainer to="/infos">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Informations & FAQ</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Nos partenaires */}
            <Nav.Item className={isActive('/partners') ? 'active' : ''}>
              <LinkContainer to="/partners">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Nos partenaires</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Carte interactive */}
            <Nav.Item className={isActive('/myMap') ? 'active' : ''}>
              <LinkContainer to="/myMap">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Carte interactive</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

 