"use client"

import { useState, useEffect } from "react"

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    guests: "",
    message: ""
  })

  const [nights, setNights] = useState(0)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (form.from && form.to) {
      const start = new Date(form.from)
      const end = new Date(form.to)
      const diff = end - start
      const days = diff / (1000 * 60 * 60 * 24)

      if (days > 0) {
        setNights(days)
      } else {
        setNights(0)
      }
    }
  }, [form.from, form.to])

  function sendWhatsApp(e) {
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
    window.location.href = url
  }

  function clearForm() {
    setForm({
      name: "",
      phone: "",
      from: "",
      to: "",
      guests: "",
      message: ""
    })
    setNights(0)
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#f4f0e8]">
      <div className="section-shell">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <span className="eyebrow">Plan Your Escape</span>
          <h2 className="mt-4 text-[1.8rem] font-black leading-[1.05] tracking-[-0.05em] text-[#1d2a20] md:mt-5 md:text-[3.4rem]">
            Book Your Stay
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f6d62] md:mt-3 md:text-lg md:leading-7">
            Reserve a peaceful retreat with coffee estate views, warm hospitality, and a refreshing countryside atmosphere.
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <form onSubmit={sendWhatsApp} className="soft-card rounded-[26px] bg-white p-4 md:rounded-[30px] md:p-7">
            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition placeholder:text-[#7a817a] focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition placeholder:text-[#7a817a] focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Check-in</label>
                <input
                  type="date"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Check-out</label>
                <input
                  type="date"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  min="1"
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition placeholder:text-[#7a817a] focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  placeholder="Number of guests"
                  required
                />
              </div>

              {nights > 0 && (
                <div className="md:col-span-2 rounded-2xl bg-[#edf6ee] p-2.5 text-xs font-medium text-[#2a6b3d] md:p-3 md:text-sm">
                  Stay Duration: {nights} {nights === 1 ? "night" : "nights"}
                </div>
              )}

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1d2a20] md:mb-2 md:text-sm">Special Request</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full rounded-2xl border border-[#dfe3dc] bg-[#fafaf8] px-3 py-2.5 text-[15px] text-[#1d2a20] outline-none transition placeholder:text-[#7a817a] focus:border-[#2a6b3d] focus:ring-2 focus:ring-[#dcefe0] md:px-4 md:py-3 md:text-base"
                  placeholder="Tell us about your trip, preferred room, or timing"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
              <button type="submit" className="primary-btn flex-1 px-4 py-3 text-sm md:text-base">
                Send Booking Request
              </button>

              <button
                type="button"
                onClick={clearForm}
                className="flex-1 rounded-full border border-[#c6d0c7] bg-white px-4 py-3 text-sm font-semibold text-[#1d2a20] transition hover:bg-[#f6f8f6] md:text-base"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}