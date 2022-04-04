import React from 'react';
import contact_img from '../../images/contact_img.jpeg';
import './Contact.css'
const Contact = () => {
    return (
        <div className='container'>
            <h1>Contact us</h1>
            <div className='contact_area'>
                <img src={contact_img} alt="img" />
                <div className='contact_text'>
                    <h2>Connected with us</h2>
                    <h4> Email : watchMartBD2gmail.com</h4>
                    <h4>Phone : +880 1890341583</h4>
                    <h4> Address : Star Tech & Engineering Ltd
                        <br />
                        6th floor, 28 Kazi Nazrul Islam Ave,Navana Zohura</h4>
                        <h2>Become a buyer</h2>
                       <div className="input_area">
                       <input type="text" placeholder='Email'/>
                        <br />
                        <input type="password"  placeholder='Password'/>
                        <br />
                        <button type='button'>Register</button>
                       </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;

