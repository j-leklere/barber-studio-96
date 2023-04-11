import styles from './InfoServices.module.css'

function InfoServices(props) {
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

      <button onClick={props.nextStep} className={styles['btn-next']}>
        Siguiente
      </button>
    </div>
  )
}
export default InfoServices
