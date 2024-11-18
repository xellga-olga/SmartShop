import './Testimonials.css';
import next_btn from '../../assets/next_btn.svg';
import back_btn from '../../assets/back_btn.svg';
import { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    text: "SmartShop exceeded my expectations with their fast delivery and excellent customer service. Highly recommended!",
    name: "John Doe",
    position: "Tech Enthusiast",
    rating: 5,
  },
  {
    id: 2,
    text: "The products from SmartShop are top-notch and exactly as described. I will definitely shop here again.",
    name: "Jane Smith",
    position: "Gadget Lover",
    rating: 4,
  },
  {
    id: 3,
    text: "SmartShop's support team is incredibly responsive. They resolved my issue in no time!",
    name: "Michael Johnson",
    position: "Satisfied Customer",
    rating: 4,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const handleBack = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
          ★
        </span>
      ));
  };

  return (
    <div className='testimonials' id='testimonials'>
      <img
        className='back_btn'
        src={back_btn}
        alt='back-btn'
        onClick={handleBack}
      />
      <div className='slider'>
        <div className='testimonial'>
          <p className='testimonial-text'>{testimonialsData[current].text}</p>
          <div className='stars'>{renderStars(testimonialsData[current].rating)}</div>
          <h4 className='testimonial-name'>{testimonialsData[current].name}</h4>
          <p className='testimonial-position'>{testimonialsData[current].position}</p>
        </div>
      </div>
      <img
        className='next_btn'
        src={next_btn}
        alt='next-btn'
        onClick={handleNext}
      />
    </div>
  );
};

export default Testimonials;