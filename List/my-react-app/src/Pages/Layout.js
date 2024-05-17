import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <div  className="container-fluid" id='nn'>
    <p className='navbar-brand'>Routing</p>
    <Header/>
    </div>
    <div>   <Footer/></div>
    </>
  )
}
