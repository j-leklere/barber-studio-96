import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
