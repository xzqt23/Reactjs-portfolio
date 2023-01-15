import React from 'react'
import './Footer.css'
const Footer = () => {
  const date = new Date().getFullYear();
  return (
   <div className='footer'>
    <p>Copyright &copy; {date}-Kurt Angelo</p>
   </div>
  )
} 

export default Footer