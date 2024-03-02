import { FC } from 'react';
import { IFilmSmallWithFrame } from '../../types/IFilmSmall';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { breakpointsForMainContinueWatchingSlider } from '../../utils/breakpointsForSlider';
import arrow from '../../images/icons/arrow.png';
import { Link } from 'react-router-dom';
import '../../styles/pages/MainPage/MainContinueWatchingSlider.scss';
import continue_watching from '../../images/continue-watching.png';

interface IMainContinueWatchingSlider {
    items: IFilmSmallWithFrame[] | undefined;
    nextElementClass: string;
}

const MainContinueWatchingSlider: FC<IMainContinueWatchingSlider> = ({ items, nextElementClass }) => {
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
                breakpoints={breakpointsForMainContinueWatchingSlider}
            >
                {items?.map((slide) => {
                    return (
                        <SwiperSlide key={slide.kinopoiskId}>
                            <Link to={`/film/${slide.kinopoiskId}`} className='continue-watching_card'>
                                <div className='continue-watching_arrow'>
                                    <img src={continue_watching} alt='continue' />
                                </div>
                                <img src={slide.imageUrl} alt={`${slide.kinopoiskId}`} className='continue-watching_image' />
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

export default MainContinueWatchingSlider;
