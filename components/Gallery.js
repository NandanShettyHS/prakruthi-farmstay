"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Gallery(){

const images = [
"forest.jpg",
"walkway.jpg",
"dining.jpg",
"room1.jpg",
"room2.jpg",
"Images (1).jpg",
"Images (2).jpg",
"Images (3).jpg",
"Images (4).jpg",
"Images (5).jpg",
"Images (6).jpg",
"Images (7).jpg",
"Images (8).jpg",
"Images (9).jpg",
"Images (10).jpg",
"Images (11).jpg",
"Images (12).jpg",
"Images (13).jpg",
"Images (14).jpg",
"Images (15).jpg",
"Images (16).jpg",
"Images (17).jpg",
"Images (18).jpg",
"Images (19).jpg",
"Images (20).jpg",
"Images (21).jpg",
"Image(22).jpg",
"Image(23).jpg",
"Image(24).jpg",
"Image(25).jpg",
]

const [selected,setSelected] = useState(null)
const [showAll,setShowAll] = useState(false)
const [start,setStart] = useState(0)

useEffect(() => {
  const cycleLength = Math.max(1, images.length - 4)

  const interval = setInterval(() => {
    setStart((prev) => (prev + 1) % cycleLength)
  }, 3000)

  return () => clearInterval(interval)
}, [images.length])

useEffect(() => {
  const handleGalleryState = () => {
    if (window.location.hash !== "#gallery") {
      setShowAll(false)
      setSelected(null)
    }
  }

  window.addEventListener("popstate", handleGalleryState)
  window.addEventListener("hashchange", handleGalleryState)

  return () => {
    window.removeEventListener("popstate", handleGalleryState)
    window.removeEventListener("hashchange", handleGalleryState)
  }
}, [])

function openGallery() {
  if (window.location.hash !== "#gallery") {
    window.history.pushState({ galleryOpen: true }, "", `${window.location.pathname}${window.location.search}#gallery`)
  }
  setShowAll(true)
}

function closeGallery() {
  setShowAll(false)
  setSelected(null)

  const cleanUrl = `${window.location.pathname}${window.location.search}`
  if (window.location.hash) {
    window.history.replaceState({ galleryOpen: false }, "", cleanUrl)
  }
}

const visibleImages = images.slice(start, start + 5)

if (visibleImages.length < 5) {
  visibleImages.push(...images.slice(0, 5 - visibleImages.length))
}

return(

<section id="gallery" className="py-20 bg-white">

<h2 className="text-3xl md:text-4xl text-center font-bold mb-10">
Farmstay Gallery
</h2>

{/* SAME GRID FOR ALL SCREENS */}

<div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-4 gap-2 md:gap-3">

{/* BIG IMAGE */}

<motion.img
src={`/images/${visibleImages[0]}`}
className="col-span-2 row-span-2 w-full h-80 md:h-full object-cover rounded-xl cursor-pointer"
whileHover={{scale:1.02}}
onClick={()=>setSelected(visibleImages[0])}
/>

{/* SMALL IMAGES */}

{visibleImages.slice(1).map((img,i)=>(
<motion.img
key={i}
src={`/images/${img}`}
className="w-full h-40 md:h-full object-cover rounded-xl cursor-pointer"
whileHover={{scale:1.05}}
onClick={()=>setSelected(img)}
/>
))}

</div>


{/* SHOW ALL BUTTON */}

<div className="text-center mt-6">

<button
onClick={openGallery}
className="border px-6 py-3 rounded-lg hover:bg-gray-100"
>
Show all {images.length} photos
</button>

</div>


{/* FULL GALLERY */}

{showAll && (

<div className="fixed inset-0 bg-black/90 overflow-y-scroll z-50 p-6 md:p-10">

<button
className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 sm:right-4 sm:top-4"
onClick={closeGallery}
aria-label="Close gallery"
>
×
</button>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-14 sm:pt-16">

{images.map((img,i)=>(
<motion.img
key={i}
src={`/images/${img}`}
className="w-full h-40 md:h-48 object-cover rounded-lg cursor-pointer"
whileHover={{scale:1.05}}
onClick={()=>setSelected(img)}
/>
))}

</div>

</div>

)}


{/* IMAGE VIEWER */}

{selected && (

<div
className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
onClick={()=>setSelected(null)}
>

<button
className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 sm:right-4 sm:top-4"
onClick={()=>setSelected(null)}
aria-label="Close image"
>
×
</button>

<motion.img
src={`/images/${selected}`}
className="max-h-[90%] max-w-[90%] rounded-xl"
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
/>

</div>

)}

</section>

)

}