"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function HeroSlider(){

const images = [
"/images/forest.jpg",
"/images/walkway.jpg",
"/images/dining.jpg"
]

return (

<div className="h-screen">

<Swiper
modules={[Autoplay]}
loop={true}
autoplay={{ delay: 4000 }}
>

{images.map((img,i)=>(

<SwiperSlide key={i}>

<div
className="relative h-screen flex items-center justify-center text-white text-center"
style={{
backgroundImage:`url(${img})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

{/* dark overlay */}
<div className="absolute inset-0 bg-black/50"></div>

{/* content */}
<div className="relative z-10 max-w-2xl px-6">

<h1 className="text-5xl md:text-6xl font-bold mb-4">
Prakruthi Farmstay
</h1>

<p className="text-lg mb-6">
Coffee Plantation Nature Stay in Sakleshpur
</p>

<div className="flex justify-center gap-4 flex-wrap">

<a
href="tel:9980307931"
className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
>
Call Now
</a>

<a
href="https://wa.me/919980307931"
target="_blank"
className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
>
WhatsApp Booking
</a>

</div>

</div>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

)

}