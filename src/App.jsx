import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'
import Home from './page/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App