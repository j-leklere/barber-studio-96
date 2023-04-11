import styles from './Turn.module.css'
import TurnSteps from '../Components/Turn/TurnSteps'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Turn() {
  const location = useLocation()
  const currentPath = location.pathname.split('/reserva-de-turno/')[1]
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)

  let nextStep
  switch (currentStep) {
    case 1:
      nextStep = 'elegir-barberos'
      break
    case 2:
      nextStep = 'fecha'
      break
    case 3:
      nextStep = 'confirmacion'
      break
    default:
      nextStep = 'elegir-servicios'
  }

  const goToNextStep = () => {
    // setCurrentStep(prevState => (currentStep >= 4 ? 1 : prevState + 1))
    navigate(nextStep)
  }

  const setStep = step => {
    setCurrentStep(step)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => navigate('elegir-servicios'), [])

  useEffect(() => {
    let stepNum
    if (currentPath === 'elegir-servicios') stepNum = 1
    else if (currentPath === 'elegir-barberos') stepNum = 2
    else if (currentPath === 'fecha') stepNum = 3
    else if (currentPath === 'confirmacion') stepNum = 4
    setCurrentStep(stepNum)
  }, [currentPath])

  return (
    <main className={styles.main}>
      <h1 className={styles['heading-primary']}>Reserva de turnos</h1>
      <div className={styles.turn}>
        <TurnSteps step={currentStep} setStep={setStep} />
        <Outlet />
        <button onClick={goToNextStep} className={styles['btn-next']}>
          Siguiente
        </button>
      </div>
    </main>
  )
}

export default Turn
