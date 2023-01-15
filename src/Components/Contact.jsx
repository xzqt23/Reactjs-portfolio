import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {motion} from 'framer-motion'
import { useState } from 'react';


const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();

  let timeoutId;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9ykfdy', 'template_aresbua', form.current, 'TyIQm58uQZhOL0338')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setFormSubmitted(true)
          timeoutId = setTimeout(() => setFormSubmitted(false), 3000); 

      }, (error) => { 
          console.log(error.text);
      });
  };

  return (

    <div className='Contact'  >
      <h2>Contact me</h2> 

     
  <Container>
      <Row className='justify-content-lg-center' >
           <Col lg={5} id='contact-info'>
            <motion.div 
              initial={{x: 0, opacity: 0}}
              whileInView={{ x: [-150,0], opacity: 1 }}
              transition={{duration: 1}} >

                <i className="fa-solid fa-map-location-dot" id='add-img'></i> <span>  Address :</span>
                   <p>Tigaon,Camarines Sur</p>
                   <i className="fa-solid fa-phone" id='phone-img'></i><span> Phone :</span>
                   <p>09953284185</p>
                   <p>09519863978</p>
                   <i className="fa-solid fa-envelope" id='email-img'></i><span> Email :</span>
                   <p>angelo.agualada@gmail.com</p>
            </motion.div>
           </Col>

           <Col lg={5}>
            <motion.div  id='contact-form' className={formSubmitted ? 'form-submitted' : ''}
             initial={{x: 0, opacity: 0}}
             whileInView={{ x: [150,0], opacity: 1 }}
             transition={{duration: 1}}
            >
               <form ref={form} id='form' onSubmit={sendEmail}  > 
                    <input type="text" id='name' placeholder='Your name' name='name' required /> 
                    <input type="email" id='email' placeholder='Your email' name='email' required /> 
                    <textarea name="message" placeholder='Your message' id="message" cols="15" rows="9" required></textarea>
                    <button type="submit" id='submit' value='Send'>Submit message</button>
                  
                    {formSubmitted && 
              <div id="notification">
                Message has been submitted
              </div>
            }
                </form>
                </motion.div>
           </Col>
      </Row>
    </Container> 

  </div>

  )
}

export default Contact