import styles from './Turn.module.css'
import TurnStates from '../Components/Turn/TurnStates'
import TurnInfo from '../Components/Turn/TurnInfo'

function Turn() {
  return (
    <main className={styles.main}>
      <h1 className={styles['heading-primary']}>Reserva de turnos</h1>
      <div className={styles.turn}>
        <TurnStates />
        <TurnInfo />
      </div>
    </main>
  )
}
export default Turn
