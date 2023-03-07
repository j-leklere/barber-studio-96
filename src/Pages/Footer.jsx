import classes from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={classes.footerBorderTop}></div>
      <div className={classes.footerContainer}>
        <div className={classes.footerLogos}>
          <img
            src='/logo-barber.jpeg'
            alt=''
            className={classes.footerLogosImg}
          />
          <div className={classes.footerLogosRedes}>
            <a>ig</a>
            <a>mail</a>
          </div>
        </div>
        <div className={classes.footerInfo}>
          <h2 className={classes.footerInfoTitle}>Información</h2>
          <a href='tel: ' className={classes.footerInfoLink}>
            Contacto
          </a>

          <a href='' className={classes.footerInfoLink}>
            Dirección
          </a>

          <a href='' className={classes.footerInfoLink}>
            Servicios
          </a>

          <a href='' className={classes.footerInfoLink}>
            Barberos
          </a>
        </div>
      </div>
      <div className={classes.footerBorderBottom}></div>
      <p className={classes.footerCopy}>© 2023 Copyright</p>
    </footer>
  )
}

export default Footer
