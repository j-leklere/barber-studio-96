import classes from './LoginRegister.module.css'

function Register() {
  return (
    <main>
      <h1 className={classes.loginRegisterTitle}>Iniciar Sesión</h1>
      <div className={classes.loginRegisterBtnsContainer}>
        <button className={classes.loginRegisterBtn}>Iniciar Sesión</button>
        <button
          className={(classes.loginRegisterBtn, classes.loginRegisterBtnActive)}
        >
          Registrarme
        </button>
      </div>
      <form className={classes.registerForm}>
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
