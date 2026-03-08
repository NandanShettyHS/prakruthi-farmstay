"use client"

export default function LocationReviews(){

return(

<section id="location" className="py-12 md:py-24 bg-gray-50">

<h2 className="text-2xl md:text-4xl text-center font-bold mb-8 md:mb-16">
Location & Guest Reviews
</h2>

<div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-8 md:gap-12 md:grid-cols-2 items-start">

{/* REVIEWS FIRST */}

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
⭐ Guest Reviews
</h3>

<div className="flex items-center mb-4 md:mb-6">

<div className="text-yellow-400 text-lg md:text-xl mr-2 md:mr-3">
★★★★★
</div>

<span className="text-gray-700 text-sm md:text-base font-medium">
4.8 / 5 rating on Google
</span>

</div>


{/* Review 1 */}

<div className="bg-white p-3 md:p-6 rounded-xl shadow mb-3 md:mb-4">

<p className="text-gray-600 text-xs md:text-base mb-2 md:mb-3">
"Beautiful place surrounded by coffee plantations. Very peaceful and relaxing stay."
</p>

<p className="font-semibold text-xs md:text-sm">
— Ravi
</p>

</div>


{/* Review 2 */}

<div className="bg-white p-3 md:p-6 rounded-xl shadow mb-3 md:mb-4">

<p className="text-gray-600 text-xs md:text-base mb-2 md:mb-3">
"Rooms were clean and comfortable. Perfect place to escape the city."
</p>

<p className="font-semibold text-xs md:text-sm">
— Sneha
</p>

</div>


{/* Review 3 */}

<div className="bg-white p-3 md:p-6 rounded-xl shadow mb-4 md:mb-6">

<p className="text-gray-600 text-xs md:text-base mb-2 md:mb-3">
"Amazing hospitality and nature views. Highly recommend Prakruthi Farmstay."
</p>

<p className="font-semibold text-xs md:text-sm">
— Arjun
</p>

</div>


<a
href="https://www.google.com/travel/hotels/entity/CiMI6cjy49fw2sAfEMvkhLvl0eviUBoNL2cvMTF2cjRfcmRtaBAB/reviews?gsas=1&ts=CAEaIAoCGgASGhIUCgcI6g8QAxgIEgcI6g8QAxgJGAEyAhAAKgQKABoA&qs=OAI&ictx=111&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls"
target="_blank"
className="inline-block bg-green-600 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition"
>

Read all reviews on Google

</a>

</div>


{/* LOCATION */}

<div>

<h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
📍 Prakruthi Farmstay
</h3>

<p className="text-gray-600 text-xs md:text-base mb-4 md:mb-6">
Kabbinagadde, Halebelur <br/>
Sakleshpur Taluk <br/>
Hassan District, Karnataka 573134
</p>

<div className="w-full h-[220px] md:h-[350px] rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6">

<iframe
src="https://maps.google.com/maps?q=Prakruthi%20Farmstay%20Sakleshpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="100%"
height="100%"
loading="lazy"
></iframe>

</div>

<a
href="https://maps.google.com/?q=Prakruthi+Farmstay+Sakleshpur"
target="_blank"
className="inline-block bg-green-600 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition"
>

Get Directions

</a>

</div>

</div>

</section>

)

}