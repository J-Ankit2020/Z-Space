import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RootLayout from './pages/RootLayout'
import DestinationPage from './pages/DestinationPage'
import Crew from './pages/Crew'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <HomePage />
    },
    {
      path: 'destination/:destId',
      element: <DestinationPage />
    },
    {
      path: 'crew',
      element: <Crew />
    }
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
