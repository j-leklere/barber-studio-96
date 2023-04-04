import styles from './LoginRegister.module.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main>
      <h1 className={styles.loginRegisterTitle}>Iniciar Sesión</h1>
      <div className={styles.loginRegisterBtnsContainer}>
        <button
          className={(styles.loginRegisterBtn, styles.loginRegisterBtnActive)}
        >
          <Link to='/login' className={styles['loginRegisterBtn-text']}>
            Iniciar Sesión
          </Link>
        </button>
        <button className={styles.loginRegisterBtn}>
          <Link to='/register' className={styles['loginRegisterBtn-text']}>
            Registrarme
          </Link>
        </button>
      </div>
      <form className={styles.loginForm}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' name='password' id='password' />
        </div>
        <label className={styles.labelRecordarme}>
          <input type='checkbox' name='recordarme' /> Recordame
        </label>
        <button type='submit'>Iniciar Sesión</button>
      </form>
    </main>
  )
}

export default Login
