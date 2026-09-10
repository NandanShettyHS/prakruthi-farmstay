"use client"

import { useState, useEffect } from "react"

export default function ContactButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let ticking = false

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 500)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
        <a
          href="tel:9980307931"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d4a2c] text-xl text-white shadow-lg transition hover:bg-[#163f26]"
          aria-label="Call now"
        >
          📞
        </a>
        <a
          href="https://wa.me/919980307931?text=Hi%2C%20I%E2%80%99m%20planning%20a%20trip%20to%20Sakleshpur%20and%20came%20across%20Prakruthi%20Farmstay.%0A%0ACheck-in%20Date%3A%0ACheck-out%20Date%3A%0ANumber%20of%20Guests%3A%0A%0ACould%20you%20please%20share%20availability%20and%20price%20details%3F"
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a6b3d] text-xl text-white shadow-lg transition hover:bg-[#235a32]"
          aria-label="Book on WhatsApp"
        >
          💬
        </a>
      </div>

      {show && (
        <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
          <a
            href="tel:9980307931"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d4a2c] text-xl text-white shadow-lg transition hover:bg-[#163f26]"
            aria-label="Call now"
          >
            📞
          </a>
          <a
            href="https://wa.me/919980307931?text=Hi%2C%20I%E2%80%99m%20planning%20a%20trip%20to%20Sakleshpur%20and%20came%20across%20Prakruthi%20Farmstay.%0A%0ACheck-in%20Date%3A%0ACheck-out%20Date%3A%0ANumber%20of%20Guests%3A%0A%0ACould%20you%20please%20share%20availability%20and%20price%20details%3F"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a6b3d] text-xl text-white shadow-lg transition hover:bg-[#235a32]"
            aria-label="Book on WhatsApp"
          >
            💬
          </a>
        </div>
      )}
    </>
  )
}