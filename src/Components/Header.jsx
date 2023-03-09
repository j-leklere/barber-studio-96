import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <h1 className={styles['heading-primary']}>Barber Studio '96</h1>
      <button className={styles['nav-btn']}>HMG BTN</button>
    </header>
  )
}

export default Header
