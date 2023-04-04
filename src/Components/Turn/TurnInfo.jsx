import InfoServices from './InfoServices'
import InfoBarbers from './InfoBarbers'
import InfoDate from './InfoDate'
import InfoConfirmation from './InfoConfirmation'
import styles from './TurnInfo.module.css'

function TurnInfo() {
  return (
    <section className={styles.info}>
      <InfoServices />
      <InfoBarbers />
      <InfoDate />
      <InfoConfirmation />
    </section>
  )
}

export default TurnInfo
