import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png' 
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
export const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" srcset="" style={{width: '100%'}} />
        <div className="f-content">
            <span>anurag.console@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' className='insta' size='3rem'/>
                <Git color='white' size='3rem'/>
                <Linkedin color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}
