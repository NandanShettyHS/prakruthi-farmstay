"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-[0_10px_30px_rgba(16,24,20,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
              scrolled ? "bg-[#1d4a2c] text-white" : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            PF
          </div>

          <div>
            <p className={`text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-[#5f6d62]" : "text-white/80"}`}>
              Sakleshpur
            </p>
            <h1 className={`text-base font-bold md:text-xl ${scrolled ? "text-[#1d2a20]" : "text-white"}`}>
              Prakruthi Farmstay
            </h1>
          </div>
        </a>

        <div className={`hidden items-center gap-8 text-sm font-medium md:flex ${scrolled ? "text-[#1d2a20]" : "text-white"}`}>
          <a href="#rooms" className="transition hover:text-[#2a6b3d]">Rooms</a>
          <a href="#gallery" className="transition hover:text-[#2a6b3d]">Gallery</a>
          <a href="#location" className="transition hover:text-[#2a6b3d]">Location</a>
          <a href="#contact" className="transition hover:text-[#2a6b3d]">Contact</a>
        </div>

        <a
          href="tel:9980307931"
          className={`hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex ${
            scrolled ? "bg-[#2a6b3d] text-white" : "border border-white/40 bg-white/10 text-white backdrop-blur-sm"
          }`}
        >
          Call Now
        </a>

        <button
          className={`md:hidden text-2xl ${scrolled ? "text-[#1d2a20]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 shadow-lg backdrop-blur-md">
          <div className="section-shell flex flex-col py-4 text-center text-base font-medium text-[#1d2a20]">
            <a href="#rooms" onClick={() => setOpen(false)} className="py-2">Rooms</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="py-2">Gallery</a>
            <a href="#location" onClick={() => setOpen(false)} className="py-2">Location</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
          </div>
        </div>
      )}
    </div>
  )
}