import React from 'react'
import { Link } from 'react-router-dom'
import '/styles/home.css'


function Home() {
  return (
    
    <div className='home'>
      <div className='titles'>
        <h1> Clicked </h1>
        <br></br>
        <h4>Find your clicks </h4>
        <br></br>
        <button className='button'>
          <Link to='/signup' className='button-text'>Sign up</Link>
        </button>
        <button className='button'>
          <Link to='/login' className='button-text'>Login</Link>
        </button>
     </div>
     <br></br>
     <br></br>

    <section className='information-home'>
      <h1> fancy title </h1>
      <p> jsmdfljkmdlsqfkjmqdlskfjfsdml</p>
    </section>

    </div>
  
  )
}

export default Home