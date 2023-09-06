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
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sequi et tenetur nisi doloribus distinctio reiciendis fuga neque architecto nobis quam vel iure, porro dolorum minima. Officiis aliquam cumque possimus?'
        },
        {
            img: Profile2,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sequi et tenetur nisi doloribus distinctio reiciendis fuga neque architecto nobis quam vel iure, porro dolorum minima. Officiis aliquam cumque possimus?'
        },
        {
            img: Profile3,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sequi et tenetur nisi doloribus distinctio reiciendis fuga neque architecto nobis quam vel iure, porro dolorum minima. Officiis aliquam cumque possimus?'
        },
        {
            img: Profile4,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sequi et tenetur nisi doloribus distinctio reiciendis fuga neque architecto nobis quam vel iure, porro dolorum minima. Officiis aliquam cumque possimus?'
        },
        {
            img: Profile5,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sequi et tenetur nisi doloribus distinctio reiciendis fuga neque architecto nobis quam vel iure, porro dolorum minima. Officiis aliquam cumque possimus?'
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