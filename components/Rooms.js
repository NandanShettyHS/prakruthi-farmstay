"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Rooms(){

const [galleryImages,setGalleryImages] = useState(null)
const [sliderIndex,setSliderIndex] = useState(null)

useEffect(() => {
  const handlePopState = () => {
    setGalleryImages(null)
    setSliderIndex(null)
  }

  window.addEventListener("popstate", handlePopState)

  return () => {
    window.removeEventListener("popstate", handlePopState)
  }
}, [])

function openGallery(images, index = null) {
  setGalleryImages(images)
  setSliderIndex(index)
  window.history.pushState({ galleryOpen: true }, "", window.location.href)
}

function closeGallery() {
  setGalleryImages(null)
  setSliderIndex(null)
  if (window.history.state && window.history.state.galleryOpen) {
    window.history.back()
  }
}

/* ROOM IMAGES */

const room1Images = [
"/images/room1.jpg",
"/images/room1(2).jpg",
"/images/room1_window.jpg",
"/images/room1_washroom.jpg"
]

const room2Images = [
"/images/room2.jpg",
"/images/room2(2).jpg",
"/images/room2_window.jpg",
"/images/room2_washroom.jpg"
]

/* WHATSAPP MESSAGE */

function openWhatsApp(room){

const text = `Hello, I would like to enquire about the ${room} at Prakruthi Farmstay.`

const url = `https://wa.me/919980307931?text=${encodeURIComponent(text)}`

window.location.href = url

}

return(

<section id="rooms" className="py-20 md:py-24 bg-[#f7f4ee]">
  <div className="section-shell">
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <span className="eyebrow">Stay Experience</span>
      <h2 className="section-title mt-5">Our Rooms</h2>
      <p className="section-subtitle mt-3">
        Thoughtfully designed spaces that blend comfort, simplicity, and the beauty of a coffee plantation retreat.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-8">
      {/* ROOM 1 */}
      <div
        className="group flex cursor-pointer flex-col overflow-hidden rounded-[18px] border border-[#e2dfd7] bg-white shadow-[0_18px_42px_rgba(19,26,21,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(19,26,21,0.12)] sm:rounded-[22px]"
        onClick={() => openGallery(room1Images)}
      >
        <div className="overflow-hidden">
          <img
            src="/images/room1.jpg"
            className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 md:h-72"
          />
        </div>

        <div className="flex flex-grow flex-col p-2.5 sm:p-4 md:p-7">
          <div className="mb-2 sm:mb-3">
            <h3 className="text-[0.92rem] font-bold text-[#1d2a20] sm:text-lg md:text-2xl">Private Room</h3>
          </div>

          <p className="mb-2 text-[9.5px] leading-4 text-[#5f6d62] sm:mb-3 sm:text-xs md:text-base md:leading-7">
            Comfortable room ideal for couples or two guests. Enjoy peaceful nature views surrounded by coffee plantations.
          </p>

          <div className="mb-2 flex flex-wrap gap-1 text-[8px] text-[#1d2a20] sm:mb-3 sm:gap-1.5 sm:text-[11px] md:text-sm">
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">👥 2 Guests</span>
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">🛏 1 Bed</span>
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">🌿 View</span>
          </div>

          <div className="mt-auto flex flex-row gap-1.5 sm:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                openWhatsApp("2 Guest Private Room")
              }}
              className="primary-btn flex-1 px-2.5 py-2 text-[10px] sm:px-3 sm:text-xs md:px-4 md:py-3 md:text-base"
            >
              Book Now
            </button>

            <a
              href="tel:9980307931"
              onClick={(e) => e.stopPropagation()}
              className="flex flex-1 items-center justify-center rounded-full border border-[#2a6b3d] bg-[#f4faf5] px-2.5 py-2 text-[10px] font-semibold text-[#2a6b3d] transition hover:bg-[#e8f5eb] sm:px-3 sm:text-xs md:px-4 md:py-3 md:text-base"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      {/* ROOM 2 */}
      <div
        className="group flex cursor-pointer flex-col overflow-hidden rounded-[18px] border border-[#e2dfd7] bg-white shadow-[0_18px_42px_rgba(19,26,21,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(19,26,21,0.12)] sm:rounded-[22px]"
        onClick={() => openGallery(room2Images)}
      >
        <div className="overflow-hidden">
          <img
            src="/images/room2.jpg"
            className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 md:h-72"
          />
        </div>

        <div className="flex flex-grow flex-col p-2.5 sm:p-4 md:p-7">
          <div className="mb-2 sm:mb-3">
            <h3 className="text-[0.92rem] font-bold text-[#1d2a20] sm:text-lg md:text-2xl">Large Room / Family Room</h3>
          </div>

          <p className="mb-2 text-[9.5px] leading-4 text-[#5f6d62] sm:mb-3 sm:text-xs md:text-base md:leading-7">
            Spacious family room designed for larger groups, friends, or families visiting Sakleshpur.
          </p>

          <div className="mb-2 flex flex-wrap gap-1 text-[8px] text-[#1d2a20] sm:mb-3 sm:gap-1.5 sm:text-[11px] md:text-sm">
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">👥 4-5 Guests</span>
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">🛏 3 Beds</span>
            <span className="rounded-full bg-[#f5f1ea] px-1.5 py-1 sm:px-2">🌿 View</span>
          </div>

          <div className="mt-auto flex flex-row gap-1.5 sm:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                openWhatsApp("4–5 Guest Large Room / Family Room")
              }}
              className="primary-btn flex-1 px-2.5 py-2 text-[10px] sm:px-3 sm:text-xs md:px-4 md:py-3 md:text-base"
            >
              Book Now
            </button>

            <a
              href="tel:9980307931"
              onClick={(e) => e.stopPropagation()}
              className="flex flex-1 items-center justify-center rounded-full border border-[#2a6b3d] bg-[#f4faf5] px-2.5 py-2 text-[10px] font-semibold text-[#2a6b3d] transition hover:bg-[#e8f5eb] sm:px-3 sm:text-xs md:px-4 md:py-3 md:text-base"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


{/* ROOM GALLERY GRID */}

{galleryImages && sliderIndex === null && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-3 py-4 sm:px-6 sm:py-6">

<div className="relative w-full max-w-6xl">

<button
className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 sm:right-4 sm:top-4"
onClick={closeGallery}
aria-label="Close gallery"
>
×
</button>

<div className="grid grid-cols-2 gap-3 pt-14 sm:gap-4 md:gap-5 md:pt-16">

{galleryImages.map((img,i)=>(

<img
key={i}
src={img}
className="aspect-[4/3] w-full rounded-2xl object-cover cursor-pointer transition duration-200 hover:scale-[1.01]"
onClick={()=>setSliderIndex(i)}
/>

))}

</div>

</div>

</div>

)}


{/* FULLSCREEN SLIDER */}

{galleryImages && sliderIndex !== null && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-3 py-4 sm:px-6 sm:py-6">

<button
className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 sm:right-4 sm:top-4"
onClick={() => {
  setSliderIndex(null)
  if (window.history.state && window.history.state.galleryOpen) {
    window.history.pushState({ galleryOpen: true }, "", window.location.href)
  }
}}
aria-label="Close gallery"
>
×
</button>

<div className="w-full max-w-6xl">

<Swiper
modules={[Navigation, Pagination]}
navigation
pagination={{clickable:true}}
initialSlide={sliderIndex}
onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
>

{galleryImages.map((img,i)=>(
<SwiperSlide key={i}>

<div className="h-[70vh] flex items-center justify-center">

<img
src={img}
alt={`Room view ${i + 1}`}
className="w-full h-full object-cover rounded-lg"
/>

</div>

</SwiperSlide>
))}

</Swiper>

</div>

</div>

)}

</section>

)

}