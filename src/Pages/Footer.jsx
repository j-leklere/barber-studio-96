import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

function Footer() {
  return (
    <footer>
      {/* <div className={classes.footerBorderTop}></div> */}
      <div className={classes.footerContainer}>
        <div className={classes.footerLogos}>
          <img
            src='/logo-barber.jpeg'
            alt=''
            className={classes.footerLogosImg}
          />
          <div className={classes.footerLogosRedes}>
            {/* <a>ig</a>
            <a>mail</a> */}
          </div>
        </div>
        <ul className={classes.footerInfo}>
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
      {/* <div className={classes.footerBorderBottom}></div> */}
      <p className={classes.footerCopy}>© 2023 Copyright</p>
    </footer>
  )
}

export default Footer
