import { Link } from 'react-router-dom'
import styles from './Services.module.css'

function Services() {
  return (
    <main className={styles.main}>
      <h1 className={styles['heading-primary']}>&#126; Servicios &#126;</h1>
      <section className={styles['section-services--mobile']}>
        <div className={styles['services-service']}>
          <div>
            <img
              className={styles['services-img']}
              src='barber-cut-5.jpg'
              alt='Corte de pelo para hombre, fade alto'
            />
          </div>
          <div className={styles['services-info']}>
            <h2 className={styles['heading-secondary services-title']}>
              Corte Estándar
            </h2>
            <button className={styles['more-info-btn']}>i</button>
          </div>
        </div>
        <div className={styles['services-service']}>
          <div>
            <img
              className={styles['services-img']}
              src='barber-cut-6.jpg'
              alt='Corte de pelo para hombre, fade medio, barba incluida'
            />
          </div>
          <div className={styles['services-info']}>
            <h2 className={styles['heading-secondary services-title']}>
              Corte + Barba
            </h2>
            <button className={styles['more-info-btn']}>i</button>
          </div>
        </div>
      </section>
      <section className={styles['section-services--pc']}>
        <div className={styles['services-service--pc']}>
          <div className={styles['services-info--pc']}>
            <div className={styles['services-info-info--pc']}>
              <div className={styles['name-price']}>
                <h2 className={styles['nombre']}>Pelo</h2>
                <Link to={'/reserva-de-turno'}>
                  <button className={styles['precio']}>$1500</button>
                </Link>
              </div>
              <p className={styles['descripcion']}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus unde totam eligendi ducimus facilis fuga quasi
                pariatur aut, quis impedit quaerat officia, aperiam quo
                praesentium eveniet explicabo molestiae voluptatem odio?
              </p>
            </div>
            <div className={styles['services-img--pc1']}>
              <img
                className={styles['services-img--pc']}
                src='barber-cut-9.avif'
                alt='corte'
              />
            </div>
          </div>
          <div className={styles['img-pc--right']}></div>
        </div>
        <div className={styles['services-service--pc']}>
          <div className={styles['img-pc--left']}></div>
          <div className={styles['services-info--pc']}>
            <div className={styles['services-info-info--pc']}>
              <div className={styles['name-price']}>
                <h2 className={styles['nombre']}>Pelo</h2>
                <Link to={'/reserva-de-turno'}>
                  <button className={styles['precio']}>$1500</button>
                </Link>
              </div>
              <p className={styles['descripcion']}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus unde totam eligendi ducimus facilis fuga quasi
                pariatur aut, quis impedit quaerat officia, aperiam quo
                praesentium eveniet explicabo molestiae voluptatem odio?
              </p>
            </div>
            <div className={styles['services-img--pc1']}>
              <img
                className={styles['services-img--pc']}
                src='barber-cut-9.avif'
                alt='corte'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
