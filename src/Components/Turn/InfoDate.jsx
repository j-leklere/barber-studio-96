import styles from './InfoDate.module.css'

function InfoDate(props) {
  return (
    <div className={styles['info-date']}>
      <h3 className={styles['heading-tertiary']}>Elegir Fecha</h3>
      <div className={styles['calendar']}>CALENDARIO</div>

      <button onClick={props.nextStep} className={styles['btn-next']}>
        Siguiente
      </button>
    </div>
  )
}

export default InfoDate
