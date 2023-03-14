import React from 'react'
import { Link } from 'react-router-dom'
import '/styles/home.css'


function Home() {
  return (
    
    <div className='home'>
      <div className='titles'>
        <h1 className="main-title-home"> Clicked </h1>
        <br></br>
        <h4 className="subtitle-home">Find your clicks </h4>
        <br></br>
        <div className="home-page-buttons">
        <button className='button'>
          <Link to='/signup' className='button-text'>Sign up</Link>
        </button>
        <button className='button'>
          <Link to='/login' className='button-text'>Login</Link>
        </button>
        </div>
     </div>
     <br></br>
     <br></br>

    <section className='information-home'>
      <h1 > Connect with like-minded people </h1>
      <p> bfjdmlkqfdjsmqlsdkfjmslqdkfnsmqldfndsfkjmsqdlkfjldsqfkj dfslkjdsqfmlkfjd</p>
      <img className="image-friends-home" src='images/Friends.png' alt="friends"/>
    </section>

    </div>
  
  )
}

export default Home