// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-creative'

import {
  Autoplay,
  Keyboard,
  Pagination,
  EffectCreative,
  Navigation,
} from 'swiper'

function Slider() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative, Keyboard, Pagination, Navigation]}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true, type: 'bullets' }}
      navigation={true}
      effect={'creative'}
      grabCursor={true}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      keyboard={{ enabled: true, onlyInViewport: false }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='hero-slide'>
          <img src='/carousel-5.jpg' alt='Carousel slide 1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='hero-slide'>
          <img src='/carousel-2.jpg' alt='Carousel slide 2' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='hero-slide'>
          <img src='/carousel-4.jpg' alt='Carousel slide 3' />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
