import { FC } from 'react';
import { IFilmSmall } from '../../types/IFilmSmall';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { breakpointsForSlider } from '../../utils/breakpointsForSlider';
import arrow from '../../images/icons/arrow.png';
import { Link } from 'react-router-dom';
import '../../styles/pages/MainPage/MainTopSlider.scss';

interface IMainTopSlider {
    items: IFilmSmall[] | undefined;
    nextElementClass: string;
}

const MainTopSlider: FC<IMainTopSlider> = ({ items, nextElementClass }) => {
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
                {items?.map((slide, ind) => {
                    return (
                        <SwiperSlide key={slide.kinopoiskId}>
                            <Link to={`/film/${slide.kinopoiskId}`} className='slider_card top_card'>
                                <img src={slide.posterUrlPreview} alt={`${slide.kinopoiskId}`} />
                                <p className='top_card_number'>{ind + 1}</p>
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

export default MainTopSlider;
