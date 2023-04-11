import styles from './InfoConfirmation.module.css'

function InfoConfirmation(props) {
  return (
    <div className={styles['info-confirmation']}>
      <h3 className={styles['heading-tertiary']}>Confirmar reserva de turno</h3>
      <div className={styles['data']}>
        <div>
          <h2>Servicio</h2>
        </div>
        <div>
          <h2>Barbero</h2>
        </div>
        <div>
          <h2>Fecha</h2>
        </div>
        <div>
          <h2>Costo Total</h2>
        </div>
        <div>
          <h2>Costo de Reserva</h2>
        </div>
      </div>

      <button onClick={props.nextStep} className={styles['btn-next']}>
        Siguiente
      </button>
    </div>
  )
}

export default InfoConfirmation
