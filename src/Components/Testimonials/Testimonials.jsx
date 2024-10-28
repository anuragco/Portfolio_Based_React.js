import React from 'react'
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../img/profile1.jpg';
import Profile2 from '../../img/profile2.jpg';
import Profile3 from '../../img/profile3.jpg';
import Profile4 from '../../img/profile4.jpg';
import Profile5 from '../../img/profile5.jpg';
import { pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

    const clients = [
        {
            img: Profile1,
            review: 'Working with Jeeva was an absolute game-changer for our project. His expertise in development, attention to detail, and commitment to deadlines helped bring our vision to life seamlessly. Jeeva not only understood our needs but also provided valuable insights that enhanced the final product. Highly recommend him for any project!'
        },
        {
            img: Profile2,
            review: 'Working with Jeeva was an absolute game-changer for our project. His expertise in development, attention to detail, and commitment to deadlines helped bring our vision to life seamlessly. Jeeva not only understood our needs but also provided valuable insights that enhanced the final product. Highly recommend him for any project!'
        },
        {
            img: Profile3,
            review: 'Working with Jeeva was an absolute game-changer for our project. His expertise in development, attention to detail, and commitment to deadlines helped bring our vision to life seamlessly. Jeeva not only understood our needs but also provided valuable insights that enhanced the final product. Highly recommend him for any project!'
        },
        {
            img: Profile4,
            review: 'Working with Jeeva was an absolute game-changer for our project. His expertise in development, attention to detail, and commitment to deadlines helped bring our vision to life seamlessly. Jeeva not only understood our needs but also provided valuable insights that enhanced the final product. Highly recommend him for any project!'
        },
        {
            img: Profile5,
            review: 'Working with Jeeva was an absolute game-changer for our project. His expertise in development, attention to detail, and commitment to deadlines helped bring our vision to life seamlessly. Jeeva not only understood our needs but also provided valuable insights that enhanced the final product. Highly recommend him for any project!'
        },
    ]

   
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always Get</span>
            <span>Exceptional Work</span>
            <span>From me..</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* Slider Points */}
        
        
        <Swiper
        // modules={{pagination}}
        slidesPerView={1}
        grabCursor={true}
        pagination={{clickable: true}}
        loop={true}
        
        >

            {clients.map((client , index) =>{
                return(
                    <SwiperSlide key ={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonials