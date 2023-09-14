import React from 'react'
import { Footer, MovieDetail} from './components'
import Home from "../src/pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"; 

const Layout = () => {
  return (
    <div>
       <Outlet/>
        <Footer/>

    </div>
  )
}

const router = createBrowserRouter ([
{
  path:'/',
  element: <Layout/>,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/movie/:id',
      element: <MovieDetail />

    },
  ]
}

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App