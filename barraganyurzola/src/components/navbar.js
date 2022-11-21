import React,{useState , useEffect} from 'react'
import Logo from '../images/LogoB&U.svg'
import '../styles/navbar.css'
// import '../styles/menuresponsive.css'

import { useHistory, Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
      return(
        // <!-- structure of navigation -->
        <header id="nav">
        <nav class="navbar navbar-expand-lg menu">
          <div class="container-fluid">
            <Link to={"/"}>
            <img className="imagenmenu" src={Logo} height="80"/> 
            </Link>
          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>        
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
             
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3" >
              <li className="nav-item menu__item"><a href="/" class="menu__link">Inicio</a></li>
              <li className="nav-item menu__item"><a href="/#acerca-de" class="menu__link">Acerca de nosotros</a></li>
              <li className="nav-item menu__item"> <a href="/#practice_area">Áreas Prácticas </a></li>
              <li className="nav-item menu__item"><a href="/#lawyers">Nuestro Equipo</a></li>
              <li className="nav-item menu__item"><a href="/#contact">Contáctenos</a></li>
            </ul>
            </div>

            </div>
          </nav>
      
        </header>
      )
       
    }
  }
  export default Navbar 