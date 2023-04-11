import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import navLinkFn from '../Utils/navLinkFn'

function Footer() {
  return (
    <footer>
      <div className={classes['footer-container']}>
        <div className={classes['footer-logos']}>
          <img
            src='/logo-barber.jpeg'
            alt=''
            className={classes['footer-logos-img']}
          />
        </div>
        <ul className={classes['links-footer-desktop']}>
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
          <li>
            <NavLink to={'/contacto'} className={navLinkFn}>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to={'/login'} className={navLinkFn}>
              Iniciar Sesión
            </NavLink>
          </li>
        </ul>
        <ul className={classes['footer-info']}>
          <li>
            <a
              href='https://www.instagram.com'
              rel='noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com'
              rel='noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faEnvelope} /> E-mail
            </a>
          </li>
        </ul>
      </div>
      <p className={classes['footer-copy']}>© 2023 Copyright</p>
    </footer>
  )
}

export default Footer
