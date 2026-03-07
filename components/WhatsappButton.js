"use client"

import { useState, useEffect } from "react"

export default function ContactButtons(){

const [show,setShow] = useState(false)

useEffect(()=>{

function handleScroll(){

if(window.scrollY > 500){
setShow(true)
}else{
setShow(false)
}

}

window.addEventListener("scroll",handleScroll)

return () => window.removeEventListener("scroll",handleScroll)

},[])

if(!show) return null

return(

<div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

{/* Call */}

<a
href="tel:9980307931"
className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition"
>
📞
</a>

{/* WhatsApp */}

<a
href="https://wa.me/919980307931"
target="_blank"
className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
>
💬
</a>

</div>

)

}