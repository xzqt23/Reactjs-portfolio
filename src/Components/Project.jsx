
import './Project.css'
import img1 from '../project1.png'
import img2 from '../project2.png'
import img3 from '../project3.png'
import { useState } from 'react'
const Project = () => {

  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);

  const handleMouseEnter1 = () => {
    setShowButton1(true);
}
const handleMouseLeave1 = () => {
    setShowButton1(false);
}
const handleMouseEnter2 = () => {
    setShowButton2(true);
}
const handleMouseLeave2 = () => {
    setShowButton2(false);
}

const handleMouseEnter3 = () => {
  setShowButton3(true);
}
const handleMouseLeave3 = () => {
  setShowButton3(false);
}


  return (
    <div className='Project' data-aos='zoom-in'  data-aos-duration="1000" data-aos-easing="ease-in-out"   >
    

        <div className="container-fluid" id='container'>
             <h2>Projects</h2>
            <div className="row d-flex justify-content-evenly m-auto">
                  
              <div className="col-lg-4 col-md-10 col-sm-10  mb-5" id='project1'  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
              <img className='w-100' src={img1} alt=""  id='img1' />
                      {showButton1 && (
                        <a href="https://ubiquitous-bunny-12873b.netlify.app/index.html" target="_blank">
                      <button className='btn1'>
                        View live link
                      </button>
                      </a>
                      )}  
              </div>

              <div className="col-lg-4 col-md-10  col-sm-10 mb-5" id='project2'  onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
              <img className='w-100'  src={img2} alt="" id='img2'/>
                  
                  {showButton2 && (
                    <a href="https://unrivaled-chaja-f7c318.netlify.app/"  target="_blank">
                        <button className='btn2'>
                        View live link
                        </button>
                  </a>
            )}          
              </div>

              <div className="col-lg-4 col-md-10  col-sm-10 " id='project3'   onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
              <img className='w-100' src={img3} alt=""  id='img3'/>
                  
                  {showButton3 && (
                    <a href=""  target="_blank">
                        <button className='btn3'>
                        View live link
                        </button>
                  </a>
            )}      
              </div>


            </div>
        </div>


    </div>
  )
}

export default Project

