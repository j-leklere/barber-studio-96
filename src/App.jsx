import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error'
import RootLayout from './Pages/RootLayout'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Barbers from './Pages/Barbers'
import Turn from './Pages/Turn'
import Login from './Pages/Login'
import Register from './Pages/Register'
import InfoServices from './Components/Turn/InfoServices'
import InfoBarbers from './Components/Turn/InfoBarbers'
import InfoDate from './Components/Turn/InfoDate'
import InfoConfirmation from './Components/Turn/InfoConfirmation'
import Profile from './Pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/servicios',
        element: <Services />,
      },
      {
        path: '/barberos',
        element: <Barbers />,
      },
      {
        path: '/reserva-de-turno',
        element: <Turn />,
        children: [
          {
            path: 'elegir-servicios',
            // index: true,
            element: <InfoServices />,
          },
          { path: 'elegir-barberos', element: <InfoBarbers /> },
          { path: 'fecha', element: <InfoDate /> },
          { path: 'confirmacion', element: <InfoConfirmation /> },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
