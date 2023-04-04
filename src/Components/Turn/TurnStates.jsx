import styles from './TurnStates.module.css'

function TurnStates() {
  return (
    <section className={styles.states}>
      <div className={`${styles['state']} ${styles['state-first']}`}>
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Servicios</h2>
      </div>
      <div className={`${styles['state']} ${styles['state-second']}`}>
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Barberos</h2>
      </div>
      <div className={`${styles['state']} ${styles['state-third']}`}>
        <div className={styles['ball']}>
          <div className={styles.arrow}></div>
        </div>
        <h2 className={styles['heading-secondary']}>Fecha</h2>
      </div>
      <div className={`${styles['state']} ${styles['state-fourth']}`}>
        <div className={styles['ball']}></div>
        <h2 className={styles['heading-secondary']}>Confirmación</h2>
      </div>
    </section>
  )
}

export default TurnStates
