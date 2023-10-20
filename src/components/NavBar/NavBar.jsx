import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

function Navbar () {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowProductsMenu(true);
  };

  const handleMouseLeave = () => {
    setShowProductsMenu(false);
  };

  return (
    <div className="menu-navbar">
      <a href="#" className="logo">
        <img src="/images/logo.png" alt="" />
      </a>
      <div className="list-container">
        <nav className="navbar">
          <ul className="menu-list">
            <div className="menu-items">
              <li>
                <Link to = {'/'}>Inicio</Link>
              </li>
              <li><Link to = {'/category/Hamburguesas'}>Hamburguesas</Link>
              </li>
              <li>
              <Link to = {'/category/Papas'}>Papas</Link>
              </li>
              <li>
              <Link to = {'/category/Gaseosas'}>Gaseosas</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;

