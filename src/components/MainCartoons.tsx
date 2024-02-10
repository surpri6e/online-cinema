import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainCard from './design/MainCard/MainCard'

const MainCartoons = () => {
  return (
    <div className='main_block'>
        <h2 className="title">Cartoons</h2>
        <Swiper
          loop={true}
          spaceBetween={100}
          slidesPerView={6}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          // брэйк поинты!!
        >
        {
          // nтут бюудет массив с серва по которому мы будет выствялть весь контент
        }
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
        <SwiperSlide><MainCard/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default MainCartoons