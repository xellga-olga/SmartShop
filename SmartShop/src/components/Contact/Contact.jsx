import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">

        <div className="contact-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.2280428050463!2d20.7599680156231!3d48.08404837921817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740a663db84bd1f%3A0xa9db6dcbd13262f5!2s3532%20Miskolc%2C%20Gy%C5%91ri%20kapu%20146%2C%20Hungary!5e0!3m2!1sen!2sus!4v1699876543210!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="contact-info">
          <h3>SmartShop</h3>
          <p><strong>Contact Person:</strong> Olya Plakhotnikova</p>
          <p><strong>Address:</strong> 3532, Gyori kapu, 146, Miskolc, Hungary</p>
          <p><strong>Phone:</strong> +380668308825</p>
          <p><strong>Website:</strong> <a href="https://smartshop.com" target="_blank" rel="noopener noreferrer">smartshop.com</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@smartshop.com">info@smartshop.com</a></p>
          <p><strong>Telegram:</strong> <a href="https://t.me/smartshop">@smartshop</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;