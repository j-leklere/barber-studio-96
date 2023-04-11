import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './Home.module.css'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import Slider from '../Components/Slider'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className={styles['hero-section']}>
        <Slider />
        <div className={styles['hero-description-btn']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            praesentium optio quod cupiditate odio sint iste fuga magni facere
            vel, officiis corrupti.
          </p>
          <Link to={'/reserva-de-turno'}>
            <button className={`${styles['btn']} ${styles['btn-appointment']}`}>
              Reservá Turno
            </button>
          </Link>
        </div>
      </div>
      <div className={styles['appointment-div']}>
        <Link to={'/reserva-de-turno'}>
          <button className={`${styles['btn']} ${styles['btn-appointment']}`}>
            Reservá Turno
          </button>
        </Link>
      </div>

      <div>
        <h1 className={styles['section-title']}>Dónde Estamos</h1>
        <img
          className={styles['location-img']}
          src='mock-location.png'
          alt='mock-location-img'
        />
      </div>
      <div>
        <h1 className={styles['section-title']}>Testimonios</h1>
        <div className={styles['testimonials']}>
          <div
            className={styles['testimonial-img']}
            style={{ backgroundImage: 'url(user-img.jpg)' }}
          ></div>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            esse voluptas cupiditate commodi aliquid ex asperiores similique
            pariatur."
          </p>
          <div className={styles['testiomnials-dots']}>
            <FontAwesomeIcon
              icon={faCircleSolid}
              style={{ color: 'var(--main-color)' }}
            />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
