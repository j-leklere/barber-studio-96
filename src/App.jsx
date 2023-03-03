import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import RootLayout from './Pages/RootLayout'

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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
