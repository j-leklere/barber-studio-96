import styles from './Turn.module.css'
import TurnSteps from '../Components/Turn/TurnSteps'
import TurnInfo from '../Components/Turn/TurnInfo'
import { useState } from 'react'

function Turn() {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep(prevState => prevState + 1)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles['heading-primary']}>Reserva de turnos</h1>
      <div className={styles.turn}>
        <TurnSteps step={currentStep} />
        <TurnInfo nextStep={nextStep} />
      </div>
    </main>
  )
}

export default Turn
