import React from 'react';
import errorMsg from '../../images/errorMsg.jpg';
import './NotAvailAble.css'
const NotAvailAble = () => {
    return (
      <div className="container">
            <div className='errorMsg'>
             <img src={errorMsg} alt="img" />
        </div>
      </div>
    );
};

export default NotAvailAble;