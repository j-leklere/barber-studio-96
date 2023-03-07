import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import RootLayout from './Pages/RootLayout'
import Barbers from './Pages/Barbers'

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
        path: '/barberos',
        element: <Barbers />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
