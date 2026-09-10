import Head from "next/head"
import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import Rooms from "../components/Rooms"
import Gallery from "../components/Gallery"
import BookingForm from "../components/BookingForm"
import WhatsappButton from "../components/WhatsappButton"
import GoogleReviews from "../components/Location-Reviews"
import Footer from "../components/Footer"
import ParallaxSection from "../components/ParallaxSection"

const amenities = [
  { icon: "🌿", title: "Coffee Estate Views", text: "Wake up to fresh plantation air and green landscapes around every corner." },
  { icon: "🛏️", title: "Comfortable Rooms", text: "Simple, clean, and thoughtfully arranged spaces for a restful stay." },
  { icon: "🍽️", title: "Homely Dining", text: "Enjoy local flavors and warm hospitality in a relaxed countryside setting." },
  { icon: "🚗", title: "Easy Access", text: "A convenient stopover for family trips, getaways, and nature-filled weekends." }
]

const places = [
  { title: "Bisle Ghat", distance: "18 km", text: "A scenic mountain pass with sweeping valley views, mist, and breathtaking landscapes.", url: "https://maps.google.com/?q=Bisle+Ghat+Sakleshpur" },
  { title: "Ettina Bhuja", distance: "22 km", text: "A striking ridge with dramatic slopes and a memorable viewpoint experience.", url: "https://maps.google.com/?q=Ettina+Bhuja+Sakleshpur" },
  { title: "Gavi Betta", distance: "14 km", text: "A peaceful hilltop visit known for calm surroundings and panoramic views.", url: "https://maps.google.com/?q=Gavi+Betta+Sakleshpur" },
  { title: "Hosahalli Betta", distance: "16 km", text: "A lesser-known hill with refreshing views and a peaceful, offbeat atmosphere.", url: "https://maps.google.com/?q=Hosahalli+Betta+Sakleshpur" },
  { title: "Kaginahare Viewpoint", distance: "17 km", text: "A scenic viewpoint that offers fresh air, wide-open views, and a perfect photo stop.", url: "https://maps.google.com/?q=Kaginahare+Viewpoint+Sakleshpur" },
  { title: "Magajahalli Abbi Falls", distance: "9 km", text: "A beautiful waterfall stop surrounded by greenery and cool misty air.", url: "https://maps.google.com/?q=Magajahalli+Abbi+Falls+Sakleshpur" },
  { title: "Mallalli Waterfalls", distance: "28 km", text: "One of the most popular waterfall escapes with dramatic natural beauty.", url: "https://maps.google.com/?q=Mallalli+Waterfalls+Sakleshpur" },
  { title: "Manjarabad Fort", distance: "12 km", text: "A historical fort with beautiful surroundings and great views for photography.", url: "https://maps.google.com/?q=Manjarabad+Fort+Sakleshpur" },
  { title: "Manjehalli Falls", distance: "10 km", text: "A refreshing waterfall nearby, ideal for a short nature break.", url: "https://maps.google.com/?q=Manjehalli+Falls+Sakleshpur" },
  { title: "Patla Betta", distance: "19 km", text: "A scenic hill destination known for its calm environment and wide landscape views.", url: "https://maps.google.com/?q=Patla+Betta+Sakleshpur" },
  { title: "Shettihalli Church", distance: "14 km", text: "A heritage church with an old-world charm and scenic rural surroundings.", url: "https://maps.google.com/?q=Shettihalli+Church+Sakleshpur" },
  { title: "Shri Bettada Bhairaveshwara Swamy Temple", distance: "20 km", text: "A spiritual hill temple that brings together faith, peace, and a beautiful setting.", url: "https://maps.google.com/?q=Shri+Bettada+Bhairaveshwara+Swamy+Temple+Sakleshpur" },
  { title: "Beluru Temple", distance: "40 km", text: "A famous temple destination with beautiful architecture and cultural significance.", url: "https://maps.google.com/?q=Beluru+Temple+Karnataka" },
  { title: "Halebeedu Temple", distance: "45 km", text: "A heritage temple site known for its carved stone architecture and rich history.", url: "https://maps.google.com/?q=Halebeedu+Temple+Karnataka" }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Prakruthi Farmstay | Sakleshpur Coffee Plantation Stay</title>
        <meta
          name="description"
          content="Prakruthi Farmstay in Sakleshpur offers peaceful coffee plantation stay surrounded by nature. Private and shared rooms with beautiful plantation views."
        />
        <meta
          name="keywords"
          content="Prakruthi Farmstay, Sakleshpur Farmstay, Coffee plantation stay Sakleshpur, Stay in Sakleshpur,Homestay in Sakleshpur, Nature stay Sakleshpur, Plantation stay Sakleshpur, Farmstay with plantation view, Private rooms Sakleshpur, Shared rooms Sakleshpur, Peaceful stay Sakleshpur"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Prakruthi Farmstay Sakleshpur" />
        <meta
          property="og:description"
          content="Peaceful coffee plantation stay in Sakleshpur surrounded by nature."
        />
        <meta property="og:image" content="/images/forest.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prakruthi Farmstay" />
      </Head>

      <Navbar />
      <HeroSlider />
      <Gallery />
      <ParallaxSection />
      <Rooms />
      <ParallaxSection />

      <section className="py-12 md:py-24 bg-[#fefcf9]">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Amenities</span>
            <h2 className="section-title mt-4 md:mt-5">Everything you need for a relaxed stay</h2>
            <p className="section-subtitle mt-2 md:mt-3">
              Experience the comfort of home with the beauty of nature all around you.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map((item) => (
              <div key={item.title} className="soft-card rounded-[22px] bg-white p-4 text-center sm:p-5 md:rounded-[28px] md:p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#edf6ee] text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#1d2a20] sm:text-lg md:text-xl">{item.title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#5f6d62] sm:text-xs md:mt-3 md:text-sm md:leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection />

      <section className="bg-[#f4f0e8] py-12 md:py-20">
        <div className="section-shell">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <span className="eyebrow">Nearby Places</span>
            <h2 className="section-title mt-4 md:mt-5">Places to visit around Sakleshpur</h2>
            <p className="section-subtitle mt-2 md:mt-3">
              Discover scenic viewpoints, heritage spots, and refreshing nature escapes close to the stay.
            </p>
          </div>

          <div className="overflow-x-auto pb-3 scroll-smooth md:pb-4">
            <div className="flex min-w-max gap-4 md:gap-5">
              {places.map((place) => (
                <a
                  key={place.title}
                  href={place.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-card block w-[62vw] min-w-[62vw] rounded-[22px] bg-white p-4 text-left transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(19,26,21,0.08)] md:w-[290px] md:min-w-[290px] md:rounded-[26px] md:p-5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-[13px] font-bold text-[#1d2a20] md:text-xl">{place.title}</h3>
                    <span className="rounded-full bg-[#edf6ee] px-2 py-1 text-[10px] font-semibold text-[#2a6b3d] md:text-[11px]">
                      {place.distance}
                    </span>
                  </div>

                  <p className="text-[10.5px] leading-5 text-[#5f6d62] md:text-[14px] md:leading-6">{place.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection />
      <GoogleReviews />
      <ParallaxSection />
      <BookingForm />
      <WhatsappButton />
      <Footer />
    </>
  )
}