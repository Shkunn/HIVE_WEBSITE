import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import hiverbtcsLock from '../images/hiverbtcsLock-up - Color.svg';

function Navbar() {
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
      <nav className='navbar'>

        <div className='navbar-container'>

          <Link to='/HIVE_WEBSITE/' className='navbar-hiverbtcsLock' onClick={closeMobileMenu}>
            <img src={hiverbtcsLock} alt="Logo" className='logo--navbar' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link
                to='/HIVE_WEBSITE/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Accueil
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/HIVE_WEBSITE/autonomie'
                className='nav-links'
                onClick={closeMobileMenu}>
                Notre Solution
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/HIVE_WEBSITE/application'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Application
              </Link>
            </li>

            <li>
              <Link
                to='/HIVE_WEBSITE/demo'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Demander une démo
              </Link>
            </li>

          </ul>

          {button && <Button
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
          >
            Demander une démo
          </Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;