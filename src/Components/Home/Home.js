import banner from '../../images/banner.jpg'
import './Home.css'
import useProducts from '../../hooks/useProducts';
import CustomerReview from '../CustomerReview/CustomerReview';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
const Home = () => {
    const [products, serProducts] = useProducts();
    const navigate = useNavigate();
    const exploreReviews = ()=>{
        navigate(`/review`)
    }
    return (
      <section>
           <div className="container">
            <div className='home'>
             <div className='home_left'>
                 <h1>A smartwatch is a wearable 
                     <br /> computing device</h1>
                 <p> In addition to telling time, many smartwatches are Bluetooth-capable. The watch becomes a wireless Bluetooth adaptor capable of extending the capabilities of the wearer's smartphone to the watch.</p>
                 <button type="button">Explore  Now</button>
             </div>
             <div className='home_right'>
                 <img src={banner} alt="img" />
             </div>
        </div>
       </div>
       <div className="container">
           <h2>Customer Reviews ({products.length}) </h2>
           <div  className='product_area'>
                {
                    products.slice(0,3).map(product=><CustomerReview key={product.id} product={product}></CustomerReview>)
                }
           </div>
           <button onClick={()=>exploreReviews()} className='button' type='button'>See All Reviews</button>
       </div>
      </section>
    );
};

export default Home;