// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Barber from '../Components/Barber'

// import styles from './Barbers.module.css'

function Barbers() {
  return (
    <>
      <h1>Nuestros Barberos</h1>
      <Barber
        name='Ari Pereyra'
        image='mock-barber-1.jpg'
        alt='barber ari image'
      />
      <div
        style={{ backgroundColor: '#ff8c00', height: '3rem', margin: '4rem 0' }}
      ></div>
      <Barber name='Barbero 2' image='mock-barber-2.jpg' alt='barber 2 image' />
    </>
  )
}

export default Barbers
