import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const  App= ()=> {

  return (
    <>
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><About/></div>
      <div><Services/></div>
      <div><MyWork/></div>
      <div><Contact/></div>
      <div><Footer/></div>
    </>
  )
}

export default App
