import { Link } from 'react-router-dom'
import styles from './TurnSteps.module.css'

function TurnSteps(props) {
  // const stepStyles = `${styles['step']} ${props.}`

  return (
    <section className={styles.steps}>
      <Link
        to={'/reserva-de-turno/elegir-servicios'}
        // onClick={props.setStep(1)}
      >
        <div
          className={`${styles['step']} ${
            props.step >= 1 && styles['step-active']
          }`}
        >
          <div className={styles['ball']}></div>
          <h2 className={styles['heading-secondary']}>Servicios</h2>
        </div>
      </Link>
      <Link
        to={'/reserva-de-turno/elegir-barberos'}
        // onClick={props.setStep(2)}
      >
        <div
          className={`${styles['step']} ${
            props.step >= 2 && styles['step-active']
          }`}
        >
          <div className={styles['ball']}>
            <div className={styles.arrow}></div>
          </div>
          <h2 className={styles['heading-secondary']}>Barberos</h2>
        </div>
      </Link>
      <Link
        to={'/reserva-de-turno/fecha'}
        // onClick={props.setStep(3)}
      >
        <div
          className={`${styles['step']} ${
            props.step >= 3 && styles['step-active']
          }`}
        >
          <div className={styles['ball']}>
            <div className={styles.arrow}></div>
          </div>
          <h2 className={styles['heading-secondary']}>Fecha</h2>
        </div>
      </Link>
      <Link
        to={'/reserva-de-turno/confirmacion'}
        // onClick={props.setStep(4)}
      >
        <div
          className={`${styles['step']} ${
            props.step >= 4 && styles['step-active']
          }`}
        >
          <div className={styles['ball']}>
            <div className={styles.arrow}></div>
          </div>
          <h2 className={styles['heading-secondary']}>Confirmación</h2>
        </div>
      </Link>
    </section>
  )
}

export default TurnSteps
