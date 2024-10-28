import React, { useContext } from "react";
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import {motion, transform} from 'framer-motion'
// import {themeContext} from '../../Context';
// import { useContext } from "react";
const Intro = () => {

  const transition = {duration: 2, type : 'spring'}
  // const theme = useContext(themeContext);
  // const darkmode = theme.state.darkmode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Jeevan</span>
          <span>
            A Passionate Full Stack JavaScript Developer | Crafting Seamless User Experiences with React, Node, and Next.js
          </span>
        </div>
        <button className=" button i-button" onClick={()=> (window.location.href="mailto:jeevankr9142@gmail.com")}>Hire Me</button>
        <div className="i-icon">
          <img src={Github} alt="" srcset="" onClick={() => (window.location.href= "https://github.com/jeevansarma" )} />
          <img src={LinkedIn} alt="" srcset="" onClick={() => (window.location.href= "https://www.linkedin.com/in/jeevan-kumar-091875324/" )}/>
          <img src={Instagram} alt="" srcset="" onClick={() => (window.location.href= "https://www.instagram.com/jeevan.0574/profilecard/?igsh=M2hjMGZsbThmcGR5" )}/>
        </div>
      </div>
      <div className="i-right">

       <img src={Vector1} alt="" srcset="" />
       <img src={Vector2} alt="" srcset="" />
       <img src={boy} alt="" srcset="" />
       <motion.img 
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
       src= {glassesimoji} alt="" srcset="" />
       <motion.div
       initial={{left: '74%' , top: "-4%"}}
       whileInView={{left: '68%'}}
       transition={transition}
       style={{top:'-4%' , left:'68%'}}>
        <Floatingdiv image={crown} txt1='Web' txt2='Developer'/>
       </motion.div>
       <motion.div 
            initial={{left: '9rem', top:'18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}

       style={{top:'18rem' , left:'0rem'}}>
        <Floatingdiv image={thumbup} txt1='Best Degign' txt2='Award'/>;
       </motion.div>
       {/* Blur Effect */}

       <div className="blur" style={{background:'rgb(238,210,255)'}}></div>
       <div className="blur" style={{background:'#C1F5FF',
                                        top:'17rem',
                                        width: '21rem',
                                        height: '11rem',
                                        left: '-9rem'}}></div>
                                        
                                        

      </div>
    </div>
  );
};

export default Intro;
