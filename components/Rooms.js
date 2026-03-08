"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Rooms(){

const [galleryImages,setGalleryImages] = useState(null)
const [sliderIndex,setSliderIndex] = useState(null)

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

window.open(url,"_blank")

}

return(

<section id="rooms" className="py-16 md:py-20 bg-gray-50">

<h2 className="text-2xl md:text-4xl text-center font-bold mb-10 md:mb-12">
Our Rooms
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-10 px-4 md:px-6">

{/* ROOM 1 */}

<div
className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition flex flex-col cursor-pointer"
onClick={()=>setGalleryImages(room1Images)}
>

<img
src="/images/room1.jpg"
className="w-full h-40 md:h-64 object-cover"
/>

<div className="p-3 md:p-6 flex flex-col justify-between flex-grow">

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
Private Room
</h3>

<p className="text-gray-600 text-xs md:text-base mb-3">
Comfortable room ideal for couples or two guests.
Enjoy peaceful nature views surrounded by coffee plantations.
</p>

<div className="flex flex-col gap-1 text-xs md:text-sm text-gray-700 mb-4">

<span>👥 2 Guests</span>
<span>🛏 1 Bed</span>
<span>🌿 Plantation View</span>

</div>

</div>

<div className="flex gap-2">

<button
onClick={(e)=>{
e.stopPropagation()
openWhatsApp("2 Guest Private Room")
}}
className="flex-1 bg-green-600 text-white text-xs md:text-base py-2 rounded-lg hover:bg-green-700"
>
Book Now
</button>

<a
href="tel:9980307931"
onClick={(e)=>e.stopPropagation()}
className="flex-1 text-center border border-green-600 text-green-600 text-xs md:text-base py-2 rounded-lg hover:bg-green-50"
>
Call
</a>

</div>

</div>

</div>


{/* ROOM 2 */}

<div
className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition flex flex-col cursor-pointer"
onClick={()=>setGalleryImages(room2Images)}
>

<img
src="/images/room2.jpg"
className="w-full h-40 md:h-64 object-cover"
/>

<div className="p-3 md:p-6 flex flex-col justify-between flex-grow">

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
Shared Room
</h3>

<p className="text-gray-600 text-xs md:text-base mb-3">
Spacious room suitable for groups of friends or families visiting Sakleshpur.
</p>

<div className="flex flex-col gap-1 text-xs md:text-sm text-gray-700 mb-4">

<span>👥 4–5 Guests</span>
<span>🛏 3 Beds</span>
<span>🌿 Plantation View</span>

</div>

</div>

<div className="flex gap-2">

<button
onClick={(e)=>{
e.stopPropagation()
openWhatsApp("4–5 Guest Shared Room")
}}
className="flex-1 bg-green-600 text-white text-xs md:text-base py-2 rounded-lg hover:bg-green-700"
>
Book Now
</button>

<a
href="tel:9980307931"
onClick={(e)=>e.stopPropagation()}
className="flex-1 text-center border border-green-600 text-green-600 text-xs md:text-base py-2 rounded-lg hover:bg-green-50"
>
Call
</a>

</div>

</div>

</div>

</div>


{/* ROOM GALLERY GRID */}

{galleryImages && sliderIndex === null && (

<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

<div className="w-full max-w-5xl px-6">

<button
className="text-white text-xl mb-6"
onClick={()=>setGalleryImages(null)}
>
Close
</button>

<div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">

{galleryImages.map((img,i)=>(

<img
key={i}
src={img}
className="w-full h-60 md:h-72 object-cover rounded-xl cursor-pointer hover:scale-105 transition"
onClick={()=>setSliderIndex(i)}
/>

))}

</div>

</div>

</div>

)}


{/* FULLSCREEN SLIDER */}

{galleryImages && sliderIndex !== null && (

<div className="fixed inset-0 bg-black z-50 flex items-center justify-center">

<button
className="absolute top-6 right-6 text-white text-2xl"
onClick={()=>setSliderIndex(null)}
>
✕
</button>

<div className="w-full max-w-5xl">

<Swiper
modules={[Navigation, Pagination]}
navigation
pagination={{clickable:true}}
initialSlide={sliderIndex}
>

{galleryImages.map((img,i)=>(
<SwiperSlide key={i}>

<div className="h-[70vh] flex items-center justify-center">

<img
src={img}
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