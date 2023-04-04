import ReactDOM from 'react-dom'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import MobileNav from '../Components/MobileNav'
import Footer from '../Components/Footer'
import ScrollToTop from '../Utils/ScrollToTop'

const overlays = document.getElementById('overlays')

function RootLayout() {
  const [mobNavVisible, setMobNavVisible] = useState(false)

  const showMobileNav = () => {
    setMobNavVisible(true)
  }

  const hideMobileNav = () => {
    setMobNavVisible(false)
  }

  return (
    <>
      <ScrollToTop />
      {mobNavVisible &&
        ReactDOM.createPortal(
          <MobileNav onMenuClose={hideMobileNav} />,
          overlays
        )}
      <Header
        menuOpen={showMobileNav}
        menuClose={hideMobileNav}
        mobNav={mobNavVisible}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
