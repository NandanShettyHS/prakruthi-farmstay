"use client"

export default function LocationReviews() {
  return (
    <section id="location" className="py-12 md:py-24 bg-[#f8f5f1]">
      <div className="section-shell">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <span className="eyebrow">Location & Reviews</span>
          <h2 className="section-title mt-4 md:mt-5">Stay close to nature</h2>
          <p className="section-subtitle mt-2 md:mt-3">
            Discover the calm of Sakleshpur and hear from guests who loved the peaceful atmosphere and warm hospitality.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full">
            <div className="soft-card flex h-full flex-col rounded-[30px] bg-white p-5 md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-[#1d2a20] md:text-2xl">Guest Reviews</h3>
                <div className="rounded-full bg-[#fff5db] px-3 py-1 text-sm font-semibold text-[#8a6321]">★★★★★ 4.8</div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#edf0eb] bg-[#fafaf8] p-4">
                  <p className="text-sm leading-7 text-[#5f6d62] md:text-base">
                    "Beautiful place surrounded by coffee plantations. Very peaceful and relaxing stay."
                  </p>
                  <p className="mt-3 font-semibold text-[#1d2a20]">— Ravi</p>
                </div>

                <div className="rounded-2xl border border-[#edf0eb] bg-[#fafaf8] p-4">
                  <p className="text-sm leading-7 text-[#5f6d62] md:text-base">
                    "Rooms were clean and comfortable. Perfect place to escape the city."
                  </p>
                  <p className="mt-3 font-semibold text-[#1d2a20]">— Sneha</p>
                </div>

                <div className="rounded-2xl border border-[#edf0eb] bg-[#fafaf8] p-4">
                  <p className="text-sm leading-7 text-[#5f6d62] md:text-base">
                    "Amazing hospitality and nature views. Highly recommend Prakruthi Farmstay."
                  </p>
                  <p className="mt-3 font-semibold text-[#1d2a20]">— Arjun</p>
                </div>
              </div>

              <a
                href="https://www.google.com/travel/hotels/entity/CiMI6cjy49fw2sAfEMvkhLvl0eviUBoNL2cvMTF2cjRfcmRtaBAB/reviews?gsas=1&ts=CAEaIAoCGgASGhIUCgcI6g8QAxgIEgcI6g8QAxgJGAEyAhAAKgQKABoA&qs=OAI&ictx=111&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls"
                target="_blank"
                rel="noreferrer"
                className="primary-btn mt-auto w-full px-5 py-3 text-sm md:text-base"
              >
                Read all reviews on Google
              </a>
            </div>
          </div>

          <div className="h-full">
            <div className="soft-card flex h-full flex-col gap-5 rounded-[30px] bg-white p-5 md:p-7">
              <h3 className="text-xl font-bold text-[#1d2a20] md:text-2xl">Prakruthi Farmstay</h3>
              <p className="text-sm leading-7 text-[#5f6d62] md:text-base">
                Kabbinagadde, Halebelur <br />
                Sakleshpur Taluk <br />
                Hassan District, Karnataka 573134
              </p>

              <div className="h-[280px] min-h-[280px] flex-1 overflow-hidden rounded-[22px] border border-[#edf0eb] md:h-[360px] md:min-h-[360px]">
                <iframe
                  src="https://maps.google.com/maps?q=Prakruthi%20Farmstay%20Sakleshpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Prakruthi Farmstay Map"
                ></iframe>
              </div>

              <a
                href="https://maps.google.com/?q=Prakruthi+Farmstay+Sakleshpur"
                target="_blank"
                rel="noreferrer"
                className="primary-btn w-full px-5 py-3 text-sm md:text-base"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}