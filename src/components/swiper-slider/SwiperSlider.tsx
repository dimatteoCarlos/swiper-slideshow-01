//SwiperSlider.tsx

//-------------------------------------------
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './swiper-slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ResultsType } from '../../types/dataInterfaceRickAndMorty';

type SwiperSliderPropType = {
  fallbackImage: string;
  data: ResultsType[];
};

function SwiperSlider({ fallbackImage, data }: SwiperSliderPropType) {
  return (
    <>
      <div
        className='slider__wrapper'
        style={{
          background: `url(${fallbackImage}) no-repeat center/cover`,
          objectFit: 'cover',
        }}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          {data.map((item, i) => {
            const {
              name: characterName,
              gender,
              species,
              image,
              origin: { name },
            } = item;

            return (
              <SwiperSlide key={`${i}`} className='slide__container'>
                <div>
                  <img
                    className='slide__img'
                    src={`${image}`}
                    alt={`/assets${image}`}
                  />
                  <h1 className='slide__title'>{characterName}</h1>
                  <p className='slide__info'>{`Whose origin is from ${name} this  ${species} specimen is 
            ${gender} 
           `}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperSlider;
