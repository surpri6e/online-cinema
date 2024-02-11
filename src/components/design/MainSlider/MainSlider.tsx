import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFilmSmall } from '../../../types/IFilmSmall'
import { Swiper, SwiperSlide } from 'swiper/react'
import './MainSlider.scss'
import 'swiper/css'

interface IMainSlider {
  items: IFilmSmall[] | undefined;
}

const MainSlider: FC<IMainSlider> = ({items}) => {
  return (
    <Swiper
          loop={true}
          spaceBetween={100}
          slidesPerView={6}
          allowTouchMove={true}
          // брэйк поинты!!
        >
        {
          items?.map((slide) => {
            return ( 
              <SwiperSlide key={}>
                  <Link to={`/film/${slide.kinopoiskId}`} className='main_card'>
                    <img src={slide.posterUrlPreview} alt={`${slide.kinopoiskId}`} />
                  </Link>
              </SwiperSlide>
            )
          })
        }

    </Swiper>
  )
}

export default MainSlider