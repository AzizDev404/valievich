import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RouterLayout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer className='bg-blue-600 absolute inset-x-0 '>
      <Footer/>
    </footer>
    </>
  )
}

export default RouterLayout