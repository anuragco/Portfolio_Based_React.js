import React from 'react'
import './Services.css';
import Heartemoji from'../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png' 
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import {motion } from 'framer-motion'
const Services = () => {

  const transition = {duration: 2, type : 'spring'}

  return (
   <div className="Services">

    {/* Left-Side */}

    <div className="awesome">
    <span>My Awesome</span>
    <span>Services</span>
    <span>I offer comprehensive digital services, including freelancing, website and app development, and end-to-end project support, <br /> delivering tailored, high-quality solutions to meet unique business needs and drive success..</span>
    <a href={Resume} target='_blank'>
    <button className="button s-button">Download CV</button>
    </a>
    <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>
    {/* Right side */}

    <div className="cards">

       <motion.div
        initial={{left: '-25%'}}
        whileInView={{left: '14rem'}}
        transition={transition}
       
       style={{left:'14rem'}}>
       <Card
                    emoji = {Heartemoji}
                    heading ={"Design"}
                    details = {"Figma , Scatch , PhotoShop , Adobe XD , Adobe"}
        
        />
       </motion.div>

       {/* Second Card */}

       <motion.div 
       
       
       style={{top:'12rem', left:'-4rem'}}>
        <Card
                            emoji = {Glasses}
                            heading ={"Developer"}
                            details = {"HTML , CSS , JavaScript , React"}
        
        />
       </motion.div>

       {/* 3rd Card */}

       <motion.div 
       initial={{left: '25%'}}
       whileInView={{left: '14rem'}}
          
          
          transition={transition}
       
       style={{top:'19rem', left:'12rem'}}>
        <Card
                            emoji = {humble}
                            heading ={"UI/UX"}
                            details = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis!'}
        
        />
       </motion.div>
       <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

    </div>
   </div>
  )
}

export default Services
