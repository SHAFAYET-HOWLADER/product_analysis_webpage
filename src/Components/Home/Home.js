import React from 'react';
import banner from '../../images/banner.jpg'
import './Home.css'
const Home = () => {
    return (
       <div className="container">
            <div className='home'>
             <div className='home_left'>
                 <h1>A smartwatch is a wearable 
                     <br /> computing device</h1>
                 <p> In addition to telling time, many smartwatches are Bluetooth-capable. The watch becomes a wireless Bluetooth adaptor capable of extending the capabilities of the wearer's smartphone to the watch.</p>
             </div>
             <div className='home_right'>
                 <img src={banner} alt="img" />
             </div>
        </div>
       </div>
    );
};

export default Home;