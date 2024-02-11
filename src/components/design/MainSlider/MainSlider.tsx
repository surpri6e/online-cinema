import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFilmSmall } from '../../../types/IFilmSmall'
import { Swiper, SwiperSlide } from 'swiper/react'
import './MainSlider.scss'
import 'swiper/css'

import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import arrow from '../../../images/icons/arrow.png'

interface IMainSlider {
  items: IFilmSmall[] | undefined;
  nextElementClass: string;
}

const MainSlider: FC<IMainSlider> = ({items, nextElementClass}) => {
  return (
    <>
    <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${nextElementClass}`,
          }}

          loop={true}
          spaceBetween={100}
          slidesPerView={6}
          allowTouchMove={false}
          className='main_slider'
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
        <div className={`${nextElementClass} next_element`}>
          <img src={arrow} alt="next slide" />
        </div>
    </Swiper>
    </>
  )
}

export default MainSlider