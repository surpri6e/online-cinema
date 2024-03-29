import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFilmSmall } from '../types/IFilmSmall';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../styles/components/Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import arrow from '../images/icons/arrow.png';
import { breakpointsForSlider } from '../utils/breakpointsForSlider';

interface ISlider {
    items: IFilmSmall[] | undefined;
    nextElementClass: string;
}

const Slider: FC<ISlider> = ({ items, nextElementClass }) => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: `.${nextElementClass}`,
                }}
                loop={true}
                slidesPerView={1}
                allowTouchMove={false}
                className='slider'
                spaceBetween={5}
                breakpoints={breakpointsForSlider}
            >
                {items?.map((slide) => {
                    return (
                        <SwiperSlide key={slide.kinopoiskId}>
                            <Link to={`/film/${slide.kinopoiskId}`} className='slider_card'>
                                <img src={slide.posterUrlPreview} alt={`${slide.kinopoiskId}`} />
                            </Link>
                        </SwiperSlide>
                    );
                })}
                <div className={`${nextElementClass} next_element`}>
                    <img src={arrow} alt='next slide' />
                </div>
            </Swiper>
        </>
    );
};

export default Slider;
