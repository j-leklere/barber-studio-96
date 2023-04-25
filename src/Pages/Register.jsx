import styles from './LoginRegister.module.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className={styles['register-main']}>
      <h1 className={styles.loginRegisterTitle}>Registrarme</h1>
      <div className={styles.loginRegisterBtnsContainer}>
        <Link to='/login' className={styles['loginRegisterBtn-container']}>
          <button className={styles.loginRegisterBtn}>Iniciar Sesión</button>
        </Link>
        <Link
          to='/register'
          className={styles['loginRegisterBtn-container-active']}
        >
          <button className={styles.loginRegisterBtn}>Registrarme</button>
        </Link>
      </div>
      <form className={styles.registerForm}>
        <div>
          <label htmlFor='firstName'>Nombre</label>
          <input type='text' name='firstName' id='firstName' />
        </div>
        <div>
          <label htmlFor='lastName'>Apellido</label>
          <input type='text' name='lastName' id='lastName' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' name='password' id='password' />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirmar contraseña</label>
          <input type='password' name='confirmPassword' id='confirmPassword' />
        </div>

        <button type='submit'>Crear una cuenta</button>
      </form>
    </main>
  )
}

export default Register
