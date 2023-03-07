import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function RootLayout() {
  return (
    <>
      {/* Header element goes here */}
      <Outlet />
      {/* Footer element goes here */}
      <Footer />
    </>
  )
}

export default RootLayout
