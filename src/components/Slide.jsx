"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"

import img1 from "../assets/1.svg.png"
import img2 from "../assets/2.svg.png"
import img3 from "../assets/3.svg.png"
import img4 from "../assets/4.svg.png"
import img5 from "../assets/5.svg.png"
import img6 from "../assets/6.svg.png"
import img7 from "../assets/7.svg.png"
import img8 from "../assets/8.svg.png"

const Slide = () => {
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues with Swiper
  useEffect(() => {
    setMounted(true)
  }, [])

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8]

  if (!mounted) {
    return (
      <div className="w-full py-6 flex flex-wrap justify-center gap-4">
        {images.slice(0, 4).map((img, idx) => (
          <img
            key={idx}
            src={img || "/placeholder.svg"}
            alt={`slide-${idx}`}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        loopedSlides={images.length}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        allowTouchMove={true}
        grabCursor={true}
        cssMode={false}
        breakpoints={{
          // Mobile phones (small)
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            speed: 2000,
          },
          // Mobile phones (medium)
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
            speed: 2500,
          },
          // Tablets
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 3000,
          },
          // Small laptops
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 3500,
          },
          // Desktops
          1024: {
            slidesPerView: 6,
            spaceBetween: 25,
            speed: 4000,
          },
          // Large desktops
          1280: {
            slidesPerView: 8,
            spaceBetween: 30,
            speed: 4000,
          },
        }}
        className="mySwiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img || "/placeholder.svg"}
              alt={`slide-${idx}`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slide
