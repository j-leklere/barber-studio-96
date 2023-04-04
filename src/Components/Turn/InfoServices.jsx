import styles from './InfoServices.module.css'

function InfoServices() {
  return (
    <div className={styles['info-services']}>
      <h3 className={styles['heading-tertiary']}>Elegir Servicio</h3>
      <div className={styles['services-types']}>
        <div>
          <input type='checkbox' id='Pelo' name='Pelo' />
          <label htmlFor='Pelo'>Pelo</label>
        </div>

        <div>
          <input type='checkbox' id='Barba' name='Barba' />
          <label htmlFor='Barba'>Barba</label>
        </div>

        <div>
          <input type='checkbox' id='Pelo y Barba' name='Pelo y Barba' />
          <label htmlFor='Pelo y Barba'>Pelo y Barba</label>
        </div>
      </div>
      <h4 className={styles['heading-quaternary']}>Siguiente</h4>
    </div>
  )
}
export default InfoServices
