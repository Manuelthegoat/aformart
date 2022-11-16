import React from 'react'
import './Swiper.css';
import {data} from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';


export default () => {
  return (
    <div className="swipers">
    <Swiper
      className='swipersli'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        { data.map( item => (
          <SwiperSlide key={item.id}>
            <div><br/>
            <img src={item.img} alt="" className='swipeimg'/><br/><br/><br/><br/><br/>
            <div className="swipename">
              <p className="swipenames"> {item.name}</p>
           <p className="swipqty">{item.quantity}</p>
            </div>
            </div>
          </SwiperSlide>
        )) }
        
    </Swiper>
    <Swiper
      className='swipersliwidth'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        { data.map( item => (
          <SwiperSlide key={item.id}>
            <div><br/>
            <img src={item.img} alt="" className='swipeimg'/><br/><br/><br/><br/><br/>
            <div className="swipename">
            <p className="swipenames"> {item.name}</p>
            <p className="swipqty">{item.quantity}</p>
            </div>
            </div>
          </SwiperSlide>
        )) }
        
    </Swiper>
        </div>
  );
};
