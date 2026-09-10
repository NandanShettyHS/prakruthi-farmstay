"use client"

export default function Footer() {
  return (
    <footer className="bg-[#0d1d12] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-3 md:py-14">
        <div>
          <h3 className="text-xl font-bold text-white">Prakruthi Farmstay</h3>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#cdd7cf]">
            Peaceful coffee plantation stay in Sakleshpur surrounded by nature. Perfect getaway for couples, families, and friends.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-[#dfe9df]">
            <p>📞 9980307931</p>
            <p>📞 8310433062</p>
            <a href="https://wa.me/919980307931" target="_blank" rel="noreferrer" className="inline-block text-[#9fe1a5] hover:text-white">
              WhatsApp Booking
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Location</h3>
          <p className="mt-4 text-sm leading-7 text-[#dfe9df]">
            Kabbinagadde, Halebelur <br />
            Sakleshpur Taluk <br />
            Hassan District, Karnataka
          </p>
          <a
            href="https://maps.google.com/?q=Prakruthi+Farmstay+Sakleshpur"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-[#9fe1a5] hover:text-white"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-[#a8b1a9]">
        © {new Date().getFullYear()} Prakruthi Farmstay. All rights reserved.
      </div>
    </footer>
  )
}