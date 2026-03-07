"use client"

import { useState, useEffect } from "react"

export default function Navbar(){

const [open,setOpen] = useState(false)
const [scrolled,setScrolled] = useState(false)

useEffect(()=>{

function handleScroll(){

if(window.scrollY > 80){
setScrolled(true)
}else{
setScrolled(false)
}

}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
scrolled ? "bg-white shadow" : "bg-transparent"
}`}>

<div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

{/* Logo */}

<h1 className={`font-bold text-lg md:text-xl ${
scrolled ? "text-black" : "text-white"
}`}>
Prakruthi Farmstay
</h1>

{/* Desktop Menu */}

<div className={`hidden md:flex space-x-6 text-sm md:text-base ${
scrolled ? "text-black" : "text-white"
}`}>

<a href="#rooms" className="hover:text-green-600">Rooms</a>

<a href="#gallery" className="hover:text-green-600">Gallery</a>

<a href="#location" className="hover:text-green-600">Location</a>

<a href="#contact" className="hover:text-green-600">Contact</a>

</div>

{/* Mobile Hamburger */}

<button
className={`md:hidden text-2xl ${
scrolled ? "text-black" : "text-white"
}`}
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>

{/* Mobile Menu */}

{open && (

<div className="md:hidden bg-white shadow">

<div className="flex flex-col text-center py-4 space-y-4">

<a href="#rooms" onClick={()=>setOpen(false)}>Rooms</a>

<a href="#gallery" onClick={()=>setOpen(false)}>Gallery</a>

<a href="#location" onClick={()=>setOpen(false)}>Location</a>

<a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

</div>

</div>

)}

</div>

)

}