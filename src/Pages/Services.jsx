import styles from './Services.module.css'

function Services() {
  return (
    <main>
      <section className={styles['section-services']}>
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
            <button className={styles['more-info-btn']}>INFO BTN</button>
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
            <button className={styles['more-info-btn']}>INFO BTN</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
