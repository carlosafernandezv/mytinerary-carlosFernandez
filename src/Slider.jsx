
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Slider.css'; 

export const Slider = ({ slides }) => {
  return (

    <>



      

        <div className="text-center mx-6 my-6">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-black sm:text-6xl">
          Popular Mytineraries
          </h2>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerGroup={1}
          slidesPerView={1}
          freeMode={true}
          navigation={true}
          pagination={{ dynamicBullets: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 4,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 4,
            }
          }}
          className='w-[90%] sm:w-[80%] mx-auto my-8 '
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.image}>
              <div className='w-96 slider-item mb-6 relative shadow-lg rounded-xl overflow-hidden'>
                            <div className='image-container flex justify-center items-center'>
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className='slider-image'
                                    loading="lazy"                                     
                                />
                                <div className='overlay absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-25'></div>
                                <p className='text-overlay absolute bottom-4 left-4 text-white font-bold text-xl bg-opacity-75 bg-black p-2 rounded-lg'>
                                    {slide.title}
                                </p>
                            </div>
                        </div>
              
            </SwiperSlide>
          ))}


        </Swiper>


      







    </>
  )

}