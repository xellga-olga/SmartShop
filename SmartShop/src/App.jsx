import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProductsServices from "./components/ProductsServices/ProductsServices";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Products and Services" title="What We Offer" />
        <ProductsServices />
        <About setPlay={setPlay} />
        <Title title="News" />
        <News />
        <Title
          subTitle="WHAT CUSTOMERS SAY ABOUT US"
          title="TESTIMONIALS & REVIEWS"
        />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlay={setPlay} />
    </div>
  );
}

export default App;
