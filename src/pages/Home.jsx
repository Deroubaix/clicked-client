import React from 'react'
import { Link } from 'react-router-dom'
import '/styles/home.css'
import myImage from '../../images/Friends.png'


function Home() {
  return (
    
    <div className='home'>
      <div className='titles'>
        <h1 className="main-title-home"> Clicked </h1>
        <br></br>
        <h4 className="subtitle-home">Find your people, <br></br>find who you click with!<br></br>  </h4>
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
      <h1 > Connect with like-minded people </h1> <br></br>
      <h5>Pick your answers and connect with people who<br></br> have the same things in <i>common as you</i></h5>
      <h4> It's just some clicks away.</h4>
      <img className="image-friends-home" src={myImage} alt="friends"/>
    </section>

    </div>
  
  )
}

export default Home