import './Footer.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-logo'>
        <img src={logo} alt="logo" className="logo" />
        </div>
        <div className='footer-info'>
          <p>&copy; 2024 SMARTSHOP. All rights reserved.</p>
          <p>Your go-to shop for the latest and greatest in tech!</p>
        </div>
        <ul className='footer-socials'>
          <li>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;