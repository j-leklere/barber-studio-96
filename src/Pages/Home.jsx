import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   solid,
//   regular,
//   brand,
//   icon,
// } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './Home.module.css'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import Header from '../Components/Header'

function Home() {
  return (
    <>
      <Header></Header>
      {/* <div style={{ backgroundColor: 'orange' }}>HEADER</div> */}
      {/* Carousel */}
      <div>
        <img
          className={styles['carousel-img']}
          src='carousel-1.jpg'
          alt='carousel-1'
        />
      </div>
      <div className={styles['appointment-div']}>
        <button className={`${styles['btn']} ${styles['btn-appointment']}`}>
          Reservá Turno
        </button>
      </div>
      <div>
        <h1 className={styles['section-title']}>Dónde Estamos</h1>
        <img
          style={{ width: '100%' }}
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
            <FontAwesomeIcon icon={faCircleSolid} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
