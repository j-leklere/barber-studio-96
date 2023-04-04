import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Barber.module.css'

function Barber(props) {
  return (
    <div className={styles['barber-container']}>
      <img className={styles['barber-img']} src={props.image} alt={props.alt} />
      <div className={styles['barber-name-description-container']}>
        <div className={styles['barber--ig-div']}>
          <h2 className={styles['barber-name']}>{props.name}</h2>
          <FontAwesomeIcon className={styles['ig-icon']} icon={faInstagram} />
        </div>
        <p className={styles['barber-description']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          officiis fugit cupiditate magni voluptatibus expedita natus commodi
          laboriosam enim iusto ipsum magnam dignissimos sint dolorum, fuga quam
          fugiat. Accusamus, enim. lore
        </p>
      </div>
      <div className={styles['barber-h3-cuts-container']}>
        <h3 className={styles['barber-h3']}>Algunos de sus cortes:</h3>
        <div className={styles['barber-cuts-grid']}>
          <figure>
            <img src='barber-cut-1.jpg' alt='barber cut 1' />
          </figure>
          <figure>
            <img src='barber-cut-2.jpg' alt='barber cut 1' />
          </figure>
          <figure>
            <img src='barber-cut-3.jpg' alt='barber cut 1' />
          </figure>
          <figure>
            <img src='barber-cut-4.jpg' alt='barber cut 1' />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Barber
