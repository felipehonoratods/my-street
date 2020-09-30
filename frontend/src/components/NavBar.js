import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MinhaRua <i class="fas fa-road" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to='/occurrences'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Relatar Ocorrência
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Relatar Ocorrência</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;