import React from 'react'
import './Aboutme.css'
import Img1 from '../icons/html5.png'
import Img2 from '../icons/css3.png'
import Img3 from '../icons/JS.png'
import Img4 from '../icons/react.png'
import Img5 from '../icons/php.png'
import Img6 from '../icons/laravel.png'
import Img7 from '../icons/nodejs.png'
import Img8 from '../icons/mysql.png'
import Img9 from '../icons/mongodb.png'
import Resume from '../Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Aboutme = () => {
  AOS.init();

  return (
    <div className='About' data-aos='fade-down' data-aos-duration="1000" data-aos-easing="ease-in-out" >

        <div className="container">
                  <h2>About me</h2>
              <div className="row d-flex justify-content-center">

                  <div className="col-lg-5 col-md-12 col-sm-12 " id='info'>
                  <h3>Personal Information</h3>
                      <p>Name: Kurt Angelo C. Agualada</p>
                      <p>Age: 31</p>
                      <p>Phone: 09953284185</p>
                      <p>Address: Camarines Sur, Philippines</p>
                      <a href={Resume} download>
                        <button id='cv'>Download CV</button>
                      </a>

                  </div>

                  <div className="col-lg-5">
                      <h3 id='skills'>Skills</h3>
                          <div className='skills'>
                              <img src={Img1} alt="" className='skill-icon'/>
                              <img src={Img2} alt="" className='skill-icon' />
                              <img src={Img3} alt="" className='skill-icon'/>
                              <img src={Img4} alt="" className='skill-icon'/>
                              <img src={Img5} alt="" className='skill-icon' />
                              <img src={Img6} alt=""className='skill-icon' />
                              <img src={Img7} alt=""className='skill-icon'/>
                              <img src={Img8} alt="" className='skill-icon' />
                              <img src={Img9} alt="" className='skill-icon' />
                      </div>

                  </div>



              </div>



        </div>
      

    </div>
  )
}

export default Aboutme