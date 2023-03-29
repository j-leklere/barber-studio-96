// import { faClose } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import styles from './MobileNav.module.css'

import logo from '../Assets/bs96.png'

function MobileNav(props) {
  return (
    <div className={styles.container}>
      {/* <Link
        to={'/'}
        className={styles['nav-title']}
        onClick={props.onMenuClose}
      /> */}
      {/* <div className={styles['layout-top']}>
        <Link
          to={'/'}
          className={styles['nav-title']}
          onClick={props.onMenuClose}
        ></Link> */}
      {/* {
          <FontAwesomeIcon
            icon={faClose}
            onClick={props.onMenuClose}
            className={styles['menu-close']}
          />
        } */}
      {/* </div> */}
      <ul className={styles['mobile-nav']}>
        <li>
          <NavLink
            to={'/login'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'nav-link--pending'
                : isActive
                ? 'nav-link--active'
                : 'nav-link'
            }
            onClick={props.onMenuClose}
          >
            Iniciar Sesión
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'nav-link--pending'
                : isActive
                ? 'nav-link--active'
                : 'nav-link'
            }
            onClick={props.onMenuClose}
          >
            RESERVAR TURNO
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/servicios'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'nav-link--pending'
                : isActive
                ? 'nav-link--active'
                : 'nav-link'
            }
            onClick={props.onMenuClose}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/barberos'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'nav-link--pending'
                : isActive
                ? 'nav-link--active'
                : 'nav-link'
            }
            onClick={props.onMenuClose}
          >
            Barberos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'nav-link--pending'
                : isActive
                ? 'nav-link--active'
                : 'nav-link'
            }
            onClick={props.onMenuClose}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      <Link to={'/'} className={styles['nav-logo']} onClick={props.onMenuClose}>
        <img src={logo} alt={'Barber Studio 96 logo'} />
      </Link>
    </div>
  )
}

export default MobileNav
