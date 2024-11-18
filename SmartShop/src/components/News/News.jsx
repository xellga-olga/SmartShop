import "./News.css";
import new1 from '../../assets/new1.webp'
import new2 from '../../assets/new2.jpeg'
import new3 from '../../assets/new3.jpg'

import arrow from '../../assets/arrow-white.svg'

const News = () => {
  return <div className="news" id="news">
    <div className="new">
      <img src={new1} alt=""/>
      <p>New line of Philips TVs 2024</p>
      <p>The TP Vision company presented a new line of Philips 2024 TVs, which is already on sale.</p>
    </div>
    <div className="new">
      <img src={new2} alt=""/>
      <p>Payment in installments</p>
      <p>Buy now pay later: solution to buy online in installments.</p>
    </div>
    <div className="new">
      <img src={new3} alt=""/>
      <p>Apple Card Monthly Installments</p>
      <p>Apple Card Monthly Installments plan allows users to buy an iPhone straight from the Apple Card.</p>
    </div>
    <button className="btn dark-btn">See more here <img src={arrow}/></button>
  </div>;
};

export default News;
