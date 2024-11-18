import './About.css'
import about_img from '../../assets/about-image.avif'
import about_icon from '../../assets/play-icon.svg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
         <img src={about_img} alt='About SmartShop' className='about-img'/>
         <img src={about_icon} alt='Play Icon' className='play-icon'/>
      </div>
      <div className='about-right'>
         <h3>ABOUT SMARTSHOP</h3>
         <h2>Your Trusted Source for the Latest Tech Innovations</h2>
         <p>At SmartShop, we are passionate about connecting you with the most advanced and reliable technology. From the latest gadgets to essential smart home solutions, our carefully curated selection is designed to keep you ahead of the curve.</p>
         <p>Our mission is to make tech accessible and understandable for everyone, whether you're a tech enthusiast or a newcomer to the digital world. Explore our store and discover a world of innovation that simplifies and enhances your daily life.</p>
      </div>
    </div>
  )
}

export default About