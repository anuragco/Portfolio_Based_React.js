import React, { useState } from 'react'
import './Contact.css'
// import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_pbk96d8', 'template_v9bijpc', form.current, 'wyeMuCTypIGGg97jC')
    //     .then((result) => {
    //         console.log(result.text);
    //         setDone(true);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    };



  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}>

                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>

                <input type="text" name='User_name' className='user' placeholder='Name' />
                <input type="email" name='User_email' className='user' placeholder='Email' />
                <textarea name="message" id="tef" cols="50" rows="20" className='user' placeholder='Message'></textarea>
                <input type="submit" value='send' className='button' />
                <span>{done && 'Thanks For Contacting Me!'}</span>
                <div className="blur s-blur1" style={{background: 'var(--purple)'}}>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact