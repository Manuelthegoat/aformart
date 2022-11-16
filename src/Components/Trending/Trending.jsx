import React from 'react'
import './Trending.css';
import Fire from '../../img/fire.png';
import {trendingdata} from '../trendingdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
const Trending = () => {
  return (
    <div className="trending" id="trending">
      <div className="title">
        <p className="titletext">Trending <img src={Fire} alt="" /> </p>
        <p className="normaltext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br/>been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div className="trendingproducts">
    <Swiper
      className='trendswipe1'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        { trendingdata.map( trend => (
          <SwiperSlide key={trend.id}>
            <div>
            <img src={trend.image} alt="" />
            <img src={trend.rating} alt="" />
            <p className="trendname">{trend.name}</p>
           <p className="trendtex">{trend.text}</p>
            <button className="view">{trend.btntext}</button>
            </div>
          </SwiperSlide>
        )) }
    </Swiper>
    <Swiper
      className='trendswipe2'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        { trendingdata.map( trend => (
          <SwiperSlide key={trend.id}>
            <div>
            <img src={trend.image} alt="" />
            <img src={trend.rating} alt="" />
            <p className="trendname">{trend.name}</p>
           <p className="trendtex">{trend.text}</p>
            <button className="view">{trend.btntext}</button>
            </div>
          </SwiperSlide>
        )) }
    </Swiper>
      </div>
    </div>
  )
}

export default Trending
