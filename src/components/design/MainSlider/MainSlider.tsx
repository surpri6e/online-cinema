import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFilmSmall } from '../../../types/IFilmSmall'
import { Swiper, SwiperSlide } from 'swiper/react'
import './MainSlider.scss'
import 'swiper/css'

import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

interface IMainSlider {
  items: IFilmSmall[] | undefined;
  nextElementClass: string;
}

const MainSlider: FC<IMainSlider> = ({items, nextElementClass}) => {
  return (
    <>
    <button className={`${nextElementClass}`}>next</button>
    <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${nextElementClass}`,
          }}

          loop={true}
          spaceBetween={100}
          slidesPerView={6}
          allowTouchMove={false}
          // брэйк поинты!!
        >
        {
          items?.map((slide) => {
            return ( 
              <SwiperSlide key={slide.kinopoiskId}>
                  <Link to={`/film/${slide.kinopoiskId}`} className='main_card'>
                    <img src={slide.posterUrlPreview} alt={`${slide.kinopoiskId}`} />
                  </Link>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
    </>
  )

  ////swiper-slide-next
}

export default MainSlider