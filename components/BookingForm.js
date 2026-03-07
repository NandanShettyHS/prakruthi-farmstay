"use client"

import { useState, useEffect } from "react"

export default function BookingForm() {

const [form,setForm] = useState({
name:"",
phone:"",
from:"",
to:"",
guests:"",
message:""
})

const [nights,setNights] = useState(0)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

useEffect(()=>{

if(form.from && form.to){

const start = new Date(form.from)
const end = new Date(form.to)

const diff = end - start
const days = diff / (1000 * 60 * 60 * 24)

if(days > 0){
setNights(days)
}else{
setNights(0)
}

}

},[form.from,form.to])

function sendWhatsApp(e){

e.preventDefault()

const text = `Booking Request

Name: ${form.name}
Phone: ${form.phone}

Check-in: ${form.from}
Check-out: ${form.to}

Guests: ${form.guests}

Stay Duration: ${nights} nights

Message: ${form.message}`

const url = `https://wa.me/919980307931?text=${encodeURIComponent(text)}`

window.open(url,"_blank")

}

function clearForm(){
setForm({
name:"",
phone:"",
from:"",
to:"",
guests:"",
message:""
})
setNights(0)
}

return (

<section id="contact" className="py-16 bg-green-50">

<h2 className="text-2xl md:text-3xl text-center font-bold mb-10">
Book Your Stay
</h2>

<form onSubmit={sendWhatsApp} className="max-w-xl mx-auto space-y-4 px-4">

<input
name="name"
value={form.name}
onChange={handleChange}
className="w-full border p-3 rounded"
placeholder="Name"
required
/>

<input
name="phone"
value={form.phone}
onChange={handleChange}
className="w-full border p-3 rounded"
placeholder="Phone"
required
/>

{/* Dates */}

<div className="grid grid-cols-2 gap-4">

<input
type="date"
name="from"
value={form.from}
onChange={handleChange}
className="border p-3 rounded"
required
/>

<input
type="date"
name="to"
value={form.to}
onChange={handleChange}
className="border p-3 rounded"
required
/>

</div>

{/* Nights Display */}

{nights > 0 && (

<div className="text-green-700 font-medium">
Stay Duration: {nights} {nights === 1 ? "night" : "nights"}
</div>

)}

<input
type="number"
name="guests"
value={form.guests}
onChange={handleChange}
min="1"
className="w-full border p-3 rounded"
placeholder="Guests"
required
/>

<textarea
name="message"
value={form.message}
onChange={handleChange}
className="w-full border p-3 rounded"
placeholder="Message"
/>

<div className="flex gap-4">

<button
type="submit"
className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
>
Send Booking Request
</button>

<button
type="button"
onClick={clearForm}
className="flex-1 border border-gray-400 py-3 rounded-lg hover:bg-gray-100 transition"
>
Clear
</button>

</div>

</form>

</section>

)

}