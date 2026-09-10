"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function HeroSlider() {
  const images = [
    "/images/forest.jpg",
    "/images/walkway.jpg",
    "/images/dining.jpg"
  ]

  const whatsappMessage = "https://wa.me/919980307931?text=Hi%2C%20I%E2%80%99m%20planning%20a%20trip%20to%20Sakleshpur%20and%20came%20across%20Prakruthi%20Farmstay.%0A%0ACheck-in%20Date%3A%0ACheck-out%20Date%3A%0ANumber%20of%20Guests%3A%0A%0ACould%20you%20please%20share%20availability%20and%20price%20details%3F"

  return (
    <div id="top" className="h-[78vh] min-h-[500px] sm:h-[92vh] sm:min-h-[620px]">
      <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 4500 }}>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative flex h-[78vh] min-h-[500px] items-center justify-center overflow-hidden text-white sm:h-[92vh] sm:min-h-[620px]"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,24,17,0.76),rgba(13,24,17,0.28),rgba(13,24,17,0.56))]"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f1d12]/70 to-transparent"></div>

              <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-left sm:px-6 lg:px-8">
                <div className="max-w-xl sm:max-w-2xl">
                  <h1 className="mb-4 max-w-[11ch] text-[2.5rem] font-black leading-[0.92] tracking-[-0.06em] sm:mb-5 sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl">
                    Nature stays that feel like home.
                  </h1>

                  <p className="mb-6 max-w-xl text-sm leading-6 text-white/85 sm:mb-8 sm:text-base sm:leading-7 lg:text-lg">
                    Peaceful rooms, plantation views, and warm hospitality in the heart of Sakleshpur.
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a href="tel:9980307931" className="primary-btn px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base">
                      Call Now
                    </a>
                    <a href={whatsappMessage} target="_blank" rel="noreferrer" className="secondary-btn px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base">
                      WhatsApp Booking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}