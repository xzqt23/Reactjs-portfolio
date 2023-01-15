import React from 'react'
import Aboutme from './Components/Aboutme'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import './App.css'
import {Link} from 'react-scroll'
import {useState} from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
  
  AOS.init();
    const [mobile,setMobile]=useState(false)
  return (
    
      <div className='App'>

        <nav className='nav' >
          <Link to='/' className='nav-item'>
            <h3 className='logo'>KAA</h3>
          </Link>

          <ul className={mobile?'mobile-nav-links': 'nav-links'}
          onClick={()=>setMobile(false)}  
          >
         <Link to='/' className='nav-item'>
          <li>HOME</li>
          </Link>

          <Link to='About' className='nav-item' spy={true} smooth={true} offset={5} duration={500}>
          <li>ABOUT</li>
          </Link>

          <Link to='Project' className='nav-item' spy={true} smooth={true} offset={5} duration={500}>
          <li>PROJECTS</li>
          </Link>

          <Link to='Contact' className='nav-item' spy={true} smooth={true} offset={5} duration={500}>
          <li>CONTACT</li>
          </Link>

          </ul> 
            <button className='burger-menu' onClick={()=>setMobile(!mobile)}>
                {mobile?<FaTimes/>:<FaBars/>}
            </button>  
        </nav>

        <LandingPage/>
        <Aboutme/>
        <Project/>
        <Contact/>
         <Footer/>
       
    </div>
   
  )
}

export default App