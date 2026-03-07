"use client"

export default function Footer(){

return(

<footer className="bg-gray-900 text-white py-10">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

{/* Farmstay Info */}

<div>

<h3 className="text-xl font-semibold mb-3">
Prakruthi Farmstay
</h3>

<p className="text-gray-400">
Peaceful coffee plantation stay in Sakleshpur surrounded by nature.
Perfect getaway for families and friends.
</p>

</div>

{/* Contact */}

<div>

<h3 className="text-xl font-semibold mb-3">
Contact
</h3>

<p className="text-gray-400">
📞 9980307931
</p>

<p className="text-gray-400">
📞 8310433062
</p>

<a
href="https://wa.me/919980307931"
target="_blank"
rel="noopener noreferrer"
className="text-green-400 hover:underline"
>
WhatsApp Booking
</a>

</div>

{/* Location */}

<div>

<h3 className="text-xl font-semibold mb-3">
Location
</h3>

<p className="text-gray-400 mb-3">
Kabbinagadde, Halebelur <br/>
Sakleshpur Taluk <br/>
Hassan District, Karnataka
</p>

<a
href="https://maps.google.com/?q=Prakruthi+Farmstay+Sakleshpur"
target="_blank"
rel="noopener noreferrer"
className="text-green-400 hover:underline"
>
View on Google Maps
</a>

</div>

</div>

{/* Bottom Bar */}

<div className="text-center text-gray-500 mt-10 text-sm">

© {new Date().getFullYear()} Prakruthi Farmstay. All rights reserved.

</div>

</footer>

)

}