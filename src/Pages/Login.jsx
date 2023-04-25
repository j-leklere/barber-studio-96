import styles from './LoginRegister.module.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className={styles['login-main']}>
      <h1 className={styles.loginRegisterTitle}>Iniciar Sesión</h1>
      <div className={styles.loginRegisterBtnsContainer}>
        <Link
          to='/login'
          className={styles['loginRegisterBtn-container-active']}
        >
          <button className={styles.loginRegisterBtn}>Iniciar Sesión</button>
        </Link>
        <Link to='/register' className={styles['loginRegisterBtn-container']}>
          <button className={styles.loginRegisterBtn}>Registrarme</button>
        </Link>
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
