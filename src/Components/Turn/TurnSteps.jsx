import styles from './TurnSteps.module.css'

function TurnSteps(props) {
  // const stepStyles = `${styles['state']} ${props.}`

  return (
    <section className={styles.states}>
      <div
        className={`${styles['state']} ${
          props.step >= 1 && styles['step-active']
        }`}
      >
        <div className={styles['ball']}></div>
        <h2 className={styles['heading-secondary']}>Servicios</h2>
      </div>
      <div
        className={`${styles['state']} ${
          props.step >= 2 && styles['step-active']
        }`}
      >
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Barberos</h2>
      </div>
      <div
        className={`${styles['state']} ${
          props.step >= 3 && styles['step-active']
        }`}
      >
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Fecha</h2>
      </div>
      <div
        className={`${styles['state']} ${
          props.step >= 4 && styles['step-active']
        }`}
      >
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Confirmación</h2>
      </div>
    </section>
  )
}

export default TurnSteps
