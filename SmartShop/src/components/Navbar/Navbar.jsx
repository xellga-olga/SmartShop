import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'' : 'hide-menu-icon'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='products' smooth={true} offset={-180} duration={500}>Products and Services</Link></li>
        <li><Link to='about' smooth={true} offset={-200} duration={500}>About Us</Link></li>
        <li><Link to='news' smooth={true} offset={-200} duration={500}>News</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li>
          <Link to='contact' smooth={true} offset={-180} duration={500} className="btn">Contact Us</Link>
        </li>
      </ul>
      <img src={menu} onClick={toggleMenu} className="menu-icon" alt="menu-icon"/>
    </nav>
  );
};

export default Navbar;
