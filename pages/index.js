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

export default function Home(){

return(

<>

<Head>

<title>Prakruthi Farmstay | Sakleshpur Coffee Plantation Stay</title>

<meta
name="description"
content="Prakruthi Farmstay in Sakleshpur offers peaceful coffee plantation stay surrounded by nature. Private and shared rooms with beautiful plantation views."
/>

<meta
name="keywords"
content="Prakruthi Farmstay, Sakleshpur Farmstay, Coffee plantation stay Sakleshpur, Stay in Sakleshpur"
/>

<link rel="icon" href="/favicon.ico" />


{/* Open Graph Tags */}

<meta property="og:title" content="Prakruthi Farmstay Sakleshpur" />

<meta
property="og:description"
content="Peaceful coffee plantation stay in Sakleshpur surrounded by nature."
/>

<meta property="og:image" content="/images/forest.jpg" />

<meta property="og:type" content="website" />

<meta property="og:site_name" content="Prakruthi Farmstay" />

</Head>


      <Navbar/>
      <HeroSlider/>
      <Gallery/>
      <ParallaxSection/>
      <Rooms/>
      <ParallaxSection/>
      <GoogleReviews/>
      <ParallaxSection/>
      <BookingForm/>
      <WhatsappButton/>
      <Footer/>

</>

)

}