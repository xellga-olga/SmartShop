import './ProductsServices.css'
import productservice_1 from '../../assets/productservice_1.webp'
import productservice_2 from '../../assets/productservice_2.webp'
import productservice_3 from '../../assets/productservice_3.webp'
import productservice_4 from '../../assets/productservice_4.webp'
import productservice_5 from '../../assets/productservice_5.webp'
import productservice_6 from '../../assets/productservice_6.webp'

const ProductsServices = () => {
  return (
    <div className='ProductsServices' id='products'>
      <div className='productservice'>
         <img src={productservice_1} alt='electronic devices' />
         <div className='caption'>
            <p>Electronic Devices</p>
         </div>
      </div>
      <div className='productservice'>
         <img src={productservice_2}alt='large household appliances'/>
         <div className='caption'>
            <p>Large Household Appliances</p>
         </div>
      </div>
      <div className='productservice'>
         <img src={productservice_3} alt='headphones, headsets, microphones'/>
         <div className='caption'>
            <p>Headphones.Headsets.Microphones</p>
         </div>
      </div>
      <div className='productservice'>
         <img src={productservice_4} alt='televisions' />
         <div className='caption'>
            <p>TV</p>
         </div>
      </div>
      <div className='productservice'>
         <img src={productservice_5}alt='audio'/>
         <div className='caption'>
            <p>Audio</p>
         </div>
      </div>
      <div className='productservice'>
         <img src={productservice_6} alt='utensil'/>
         <div className='caption'>
            <p>Utensil</p>
         </div>
      </div>
    </div>
  )
}

export default ProductsServices
