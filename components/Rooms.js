"use client"

export default function Rooms(){

return(

<section id="rooms" className="py-16 md:py-20 bg-gray-50">

<h2 className="text-2xl md:text-4xl text-center font-bold mb-10 md:mb-12">
Our Rooms
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-10 px-4 md:px-6">


{/* ROOM 1 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition flex flex-col">

<div className="overflow-hidden">
<img
src="/images/room1.jpg"
className="w-full h-40 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
/>
</div>

<div className="p-3 md:p-6 flex flex-col justify-between flex-grow">

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
Private Room
</h3>

<p className="text-gray-600 text-xs md:text-base mb-3">
Comfortable room ideal for couples or two guests.
Enjoy peaceful nature views surrounded by coffee plantations.
</p>


{/* ROOM FEATURES */}

<div className="flex flex-col gap-1 text-xs md:text-sm text-gray-700 mb-4">

<span>👥 2 Guests</span>
<span>🛏 1 Bed</span>
<span>🌿 Plantation View</span>

</div>

</div>


{/* BUTTONS */}

<div className="flex gap-2">

<a
href="https://wa.me/919980307931"
target="_blank"
className="flex-1 text-center bg-green-600 text-white text-xs md:text-base px-3 py-2 rounded-lg hover:bg-green-700 transition"
>
Book Now
</a>

<a
href="tel:9980307931"
className="flex-1 text-center border border-green-600 text-green-600 text-xs md:text-base px-3 py-2 rounded-lg hover:bg-green-50 transition"
>
Call
</a>

</div>

</div>

</div>



{/* ROOM 2 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition flex flex-col">

<div className="overflow-hidden">
<img
src="/images/room2.jpg"
className="w-full h-40 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
/>
</div>

<div className="p-3 md:p-6 flex flex-col justify-between flex-grow">

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
Shared Room
</h3>

<p className="text-gray-600 text-xs md:text-base mb-3">
Spacious room suitable for groups of friends or families visiting Sakleshpur.
</p>


{/* ROOM FEATURES */}

<div className="flex flex-col gap-1 text-xs md:text-sm text-gray-700 mb-4">

<span>👥 4–5 Guests</span>
<span>🛏 3 Beds</span>
<span>🌿 Plantation View</span>

</div>

</div>


{/* BUTTONS */}

<div className="flex gap-2">

<a
href="https://wa.me/919980307931"
target="_blank"
className="flex-1 text-center bg-green-600 text-white text-xs md:text-base px-3 py-2 rounded-lg hover:bg-green-700 transition"
>
Book Now
</a>

<a
href="tel:9980307931"
className="flex-1 text-center border border-green-600 text-green-600 text-xs md:text-base px-3 py-2 rounded-lg hover:bg-green-50 transition"
>
Call
</a>

</div>

</div>

</div>


</div>

</section>

)

}