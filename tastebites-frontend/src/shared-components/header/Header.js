import style from './Header.module.scss';
import { useState } from 'react';
import Row from '../Row/Row';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';

function Header() {
    const [isActive, setActive] = useState(false)
    const navItems=[{title:'Home',link:'/'},{title:'About Us',link:'/about'},{title:'Contact',link:'/contact'}]
    const isLoggedIn = useSelector((state) => state?.auth);
    console.log(isLoggedIn)

    const openHam = () => {
      const toggleClass = () => {
        setActive(!isActive);
      };
      toggleClass();
    };
  
    const closeMenu = () => {
      setActive(false);
    };
  return (
      <nav className={style.navStyl} >
        <Row>
          <div className={style.navContent}>
        <div>
          <a className="navbar-brand" href="/"><img className={style.logo} alt="logo" src="Tastebites.png" />
          </a>
        </div >
        <div className={style.mobHam}>
          <div
            className={`${style.hamburger} ${isActive ? style.hamburgerActive : ""} `}
            onClick={openHam}
          >
            <span className={style.hamburger__icon}>&nbsp;</span>
          </div>
          {isLoggedIn.user? <Link to='/logout'><button className={style.authButton}>Logout</button></Link>:
            <Link to='/login'>
            <button className={style.authButton}>Login/Register</button>
            
            </Link>}
          <div className={`${style.header_links_container} ${isActive ? style.change : ""}`}>
            <div className={style.header_links}>
              {navItems.map((item, index) =>
                <li className="nav-item active" key={index}>
                <Link className={`${style.navLink}`} to={item.link ? item.link : ''} onClick={closeMenu}>{item.title}</Link>
                </li>
              )}
         
            </div>
          </div>
        </div>

        <div className={style.deskNav} >
          <ul className={style.navItem}>
            {navItems.map((item, index) =>
              <li className="nav-item active" key={index}>
                <Link className={`${style.navLink}`} to={item.link ? item.link : ''}>{item.title}</Link>
              </li>
            )}
            {isLoggedIn.user? <Link to='/logout'><button>Logout</button></Link>:
            <Link to='/login'>
            <button>Login/Register</button>
            
            </Link>}
   

          </ul>
        </div>
        </div>
        </Row>
      </nav>
  );
}

export default Header;
