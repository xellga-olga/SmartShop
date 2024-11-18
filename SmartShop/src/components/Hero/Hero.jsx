import "./Hero.css";
import right_arrow from '../../assets/right-arrow.svg'
const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
         <h1>Welcome to SmartShop - Your Destination for Innovative Technology</h1>
         <p>At SmartShop, we bring you the latest in gadgets, electronics, and smart devices to enhance your lifestyle. Discover cutting-edge products designed to make your everyday life smarter, easier, and more connected. Join us on a journey into the future of technology!</p>
         <button className="btn">Explore More <img src={right_arrow} alt="right-arrow"/></button>
      </div>
    </div>
  )
}

export default Hero;