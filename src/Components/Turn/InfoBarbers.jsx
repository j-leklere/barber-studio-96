import styles from './InfoBarbers.module.css'

import { Link } from 'react-router-dom'

function InfoBarbers(props) {
  return (
    <div className={styles['info-barbers']}>
      <h3 className={styles['heading-tertiary']}>Elegir Barbero</h3>
      <div className={styles['barbers-types']}>
        <div>
          <input type='checkbox' id='Ariel' name='Ariel' />
          <label htmlFor='Ariel'>Ariel</label>
        </div>

        <div>
          <input type='checkbox' id='Christian' name='Christian' />
          <label htmlFor='Christian'>Christian</label>
        </div>
      </div>
      <Link>
        <button onClick={props.nextStep} className={styles['btn-next']}>
          Siguiente
        </button>
      </Link>
    </div>
  )
}

export default InfoBarbers
