"use client"

export default function ParallaxSection() {
  return (
    <div
      className="relative h-[18px] bg-fixed bg-center bg-cover md:h-[30px]"
      style={{ backgroundImage: "url('/images/walkway.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#102714]/35"></div>
    </div>
  )
}