import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Profile.module.css'

function Profile() {
  return (
    <main className={styles['profile-main']}>
      <h1 className={styles['profile-title']}>Mi Perfil</h1>
      <div className={styles['profile-container']}>
        <div className={styles['profile-icon-btn-edit']}>
          <FontAwesomeIcon icon={faUser} className={styles['profile-icon']} />
          <button className={styles['profile-btn-edit']}>EDITAR PERFIL</button>
        </div>
        <div className={styles['profile-info-container']}>
          <div>
            <h3 className={styles['profile-info-title']}>NOMBRE DE USUARIO</h3>
            <p className={styles['profile-info-data']}>Ariel Barrera</p>
          </div>
          <div>
            <h3 className={styles['profile-info-title']}>CORREO ELECTRÓNICO</h3>
            <p className={styles['profile-info-data']}>
              arielbarrera@gmail.com
            </p>
          </div>
          {/* <div>
            <h3 className={styles['profile-info-title']}>CONTRASEÑA</h3>
            <p className={styles['profile-info-data']}>-----------</p>
          </div> */}
          <div>
            <h3 className={styles['profile-info-title']}>TELÉFONO</h3>
            <p className={styles['profile-info-data']}>1122334455</p>
          </div>
        </div>
      </div>
      <div className={styles['profile-btn-prox-turnos-container']}>
        <button className={styles['profile-btn-prox-turnos']}>
          VER PRÓXIMOS TURNOS
        </button>
      </div>
    </main>
  )
}

export default Profile
