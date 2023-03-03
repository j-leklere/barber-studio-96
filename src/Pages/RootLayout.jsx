import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      {/* Header element goes here */}
      <Outlet />
      {/* Footer element goes here */}
    </>
  )
}

export default RootLayout
