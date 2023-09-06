import React from 'react'
import './Works.css';
import Upwork from '../../img/Upwork.png'
import Amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'
import Fiver from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import {motion} from 'framer-motion'
const Works = () => {
  const transition = {duration: 2, type : 'spring'}
    return (
       <div className="Works">
            <div className="awesome">
    <span>Work For All These</span>
    <span>Brand & Client</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quibusdam minima dolorum totam voluptatem voluptate,<br /> soluta repellendus iure culpa quidem ut adipisci.<br />nulla incidunt, repellendus iure culpa quidem ut adipisci.<br />nulla incidunt, repellendus iure culpa quidem ut adipisci.</span>
    
    <button className="button s-button">Hire Me</button>
    
    <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>
    {/* Right Side */}

        <div className="w-right">
            <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:5, type:'spring'}}

            className="w-maincircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiver} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" srcset="" />
                </div>
            </motion.div>

            {/* Background Circle */}

            <div className="w-BackCircle blueCircle"></div>
            <div className="w-BackCircle YellowCircle"></div>
        </div>


       </div>
    )
}

export default Works
