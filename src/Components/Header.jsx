import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'

import logo from '../Assets/bs96.png'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
  const navLinkFn = ({ isActive, isPending }) =>
    isPending ? 'nav-link--pending' : isActive ? 'nav-link--active' : 'nav-link'

  return (
    <header>
      {/* <h1 className={styles['heading-primary']}>Barber Studio '96</h1> */}
      <Link to={'/'} className={styles['mobile-header-logo']}>
        <img src={logo} alt={'barber studio 96 logo'} />
      </Link>
      {!props.mobNav && (
        <FontAwesomeIcon
          className={styles['nav-btn']}
          icon={faBars}
          onClick={props.menuOpen}
        />
      )}
      {props.mobNav && (
        <FontAwesomeIcon
          className={styles['nav-btn']}
          icon={faClose}
          onClick={props.menuClose}
        />
      )}
      <ul className={styles['header-nav']}>
        <li>
          <NavLink to={'/servicios'} className={navLinkFn}>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to={'/barberos'} className={navLinkFn}>
            Barberos
          </NavLink>
        </li>
        <Link to={'/'} className={styles['header-logo']}>
          <img src={logo} alt={'barber studio 96 logo'} />
        </Link>
        <li>
          <NavLink to={'/'} className={navLinkFn}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to={'/login'} className={navLinkFn}>
            Iniciar Sesión
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={'/'} className={navLinkFn}>
            RESERVAR TURNO
          </NavLink>
        </li> */}
      </ul>
    </header>
  )
}

export default Header
