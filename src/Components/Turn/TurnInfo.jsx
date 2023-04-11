import InfoServices from './InfoServices'
import InfoBarbers from './InfoBarbers'
import InfoDate from './InfoDate'
import InfoConfirmation from './InfoConfirmation'
import styles from './TurnInfo.module.css'

function TurnInfo(props) {
  return (
    <section className={styles.info}>
      <InfoServices nextStep={props.nextStep} />
      <InfoBarbers nextStep={props.nextStep} />
      <InfoDate nextStep={props.nextStep} />
      <InfoConfirmation nextStep={props.nextStep} />
    </section>
  )
}

export default TurnInfo
