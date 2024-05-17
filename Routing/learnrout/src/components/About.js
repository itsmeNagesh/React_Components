import React from 'react'

import Header from './Header'
import './about.css'

const About = () => {
  return (
    <div  style={{paddingTop:"10%"}}>
      <Header/>

      <h2>show only in mobile view</h2>
      <h3>show only pc</h3>
      <h1>About</h1>
    </div>
  )
}

export default About