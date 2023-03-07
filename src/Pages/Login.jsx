import classes from "./LoginRegister.module.css";

function Login() {
  return (
    <main>
      <h1 className={classes.loginRegisterTitle}>Iniciar Sesión</h1>
      <div className={classes.loginRegisterBtnsContainer}>
        <button
          className={(classes.loginRegisterBtn, classes.loginRegisterBtnActive)}
        >
          Iniciar Sesión
        </button>
        <button className={classes.loginRegisterBtn}>Registrarme</button>
      </div>
      <form className={classes.loginForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <label className={classes.labelRecordarme}>
          <input type="checkbox" name="recordarme" /> Recordame
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </main>
  );
}

export default Login;
