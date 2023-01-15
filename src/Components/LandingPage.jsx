import Facebook from './Images/facebook.png'
import Linkedin from './Images/linkedin.png'
import Github from './Images/git.png'
import Email from './Images/email.png'
import { motion } from "framer-motion";
import '../App.css'
import {Link} from 'react-scroll'
import Image from '../2x2.jpg'

const LandingPage = () => {

  return (

    <div className='landing' data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" > 
          
           <div className='info '>
            
                 <h1>Hi, I'm <span className="highlight">Kurt Angelo</span></h1>
                 <h3>Full Stack Web Developer</h3>

              <img src={Image} alt="no image" id='xzqt'/>

                <Link to='Contact' spy={true} smooth={true} offset={5} duration={500}>
                { <motion.button id='hire'
                           
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            animate="animation"
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >Hire me 
              </motion.button> }
               </Link> 
             
         </div>

    
    
        <div className='social-media'>

        <a href="https://www.facebook.com/kurtangelo.agualada" target="_blank">
            <img src={Facebook} alt="no facebook" />
         </a>    


            <a href="https://www.linkedin.com/in/kurt-angelo-agualada-879056233/" target="_blank">
                 <img src={Linkedin} alt="no linkedin" />
            </a>
   
            <a href="https://github.com/xzqt23" target="_blank">
                 <img src={Github} alt="no github" />
               </a>
                
               <Link to='Contact' spy={true} smooth={true} offset={5} duration={500}> 
                 <img src={Email} alt="no email" />
              </Link> 
                 
        </div>
           
  </div>
  )
}   

export default LandingPage