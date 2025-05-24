import React from 'react'
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const AppRouter = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path: "/login",
      element : <Login/>
    }
  ])
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default App
