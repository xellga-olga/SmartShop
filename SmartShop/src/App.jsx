import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProductsServices from "./components/ProductsServices/ProductsServices";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Products and Services' title='What We Offer'/>
        <ProductsServices />
        <About />
        <Title title='News'/>
      </div>
    </div>
  );
}

export default App;
