import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error'
import RootLayout from './Pages/RootLayout'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Barbers from './Pages/Barbers'
import Turn from './Pages/Turn'
import Login from './Pages/Login'
import Register from './Pages/Register'
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
