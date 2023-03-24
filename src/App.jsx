import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Error from './Pages/Error'
import RootLayout from './Pages/RootLayout'
import Barbers from './Pages/Barbers'
import Login from './Pages/Login'
import Register from './Pages/Register'

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
        path: '/services',
        element: <Services />,
      },
      {
        path: '/barberos',
        element: <Barbers />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
