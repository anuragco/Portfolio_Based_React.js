import React from 'react';
import'./Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import slidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import hoc from '../../img/hoc.png';
import musicApp from '../../img/musicapp.png';
import 'swiper/css'
const Portfolio = () => {
  return (
   <div className="portfolio">
        {/* Heading */}

        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}

        <Swiper spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        // loop={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={slidebar} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicApp} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" srcset="" />
            </SwiperSlide>
            
            </Swiper>
   </div>
  );
};

export default Portfolio;
