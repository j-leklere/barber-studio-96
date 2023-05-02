// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/effect-creative'

import { Autoplay, Keyboard, Pagination, EffectFlip, Navigation } from 'swiper'

function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFlip, Keyboard, Pagination, Navigation]}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true, type: 'bullets' }}
      navigation={true}
      // effect={'creative'}
      grabCursor={true}
      // creativeEffect={{
      //   prev: {
      //     shadow: true,
      //     translate: ['-20%', 0, -1],
      //   },
      //   next: {
      //     translate: ['100%', 0, 0],
      //   },
      // }}
      keyboard={{ enabled: true, onlyInViewport: false }}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='testimonial-slide'>
          <div
            className={'testimonial-img'}
            style={{ backgroundImage: 'url(user-img.jpg)' }}
          ></div>
          <p>
            (1) "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aperiam esse voluptas cupiditate commodi aliquid ex asperiores
            similique pariatur."
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='testimonial-slide'>
          <div
            className={'testimonial-img'}
            style={{ backgroundImage: 'url(user-img.jpg)' }}
          ></div>
          <p>(2)"Lorem ipsum, dolor sit amet consectetur adipisicing elit."</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='testimonial-slide'>
          <div
            className={'testimonial-img'}
            style={{ backgroundImage: 'url(user-img.jpg)' }}
          ></div>
          <p>
            (3)"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis pariatur."
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialsSlider
