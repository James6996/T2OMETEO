import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div class="container">
        <h1 class="container__title">t2ó-METEO</h1>
        <nav className="container__menu">
          <Link className="container__menu" to="/">
            Home
          </Link>
          <Link className="container__menu" to="/table">
            Tabla(Excel)
          </Link>

          <Link className="container__menu" to="/bars">
            Gráfico de barras
          </Link>
          <Link className="container__menu" to="/lines">
            Gráfico lineal
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
