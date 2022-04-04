import React from 'react';
import person_one from '../../images/person_one.webp';
import person_two from '../../images/person_two.webp';
import person_three from '../../images/person_three.webp';
import './About.css'
const About = () => {
    return (
        <div className='container'>
            <h1 className='about_heading'>Know about us here</h1>
            <div className=''>
                  <h3>welcome to our Managing part</h3>
                  <div className='about_part'>
                      <div>
                          <img src={person_one} alt="" />
                           <h3>Jon Franklin</h3>
                           <small>Founder of watch mart</small>
                           <p>
                               <p>
                               CEOs are the highest-ranking executive at a company. They make major corporate decisions, manage the company's overall resources and operations, and communicate with the board of directors.
                               </p>
                           </p>
                      </div>
                      <div>
                          <img src={person_two} alt="" />
                           <h3>Jon charles</h3>
                           <small>Sales man and investor</small>
                           <p>
                           The salesperson is responsible for greeting customers, helping them find items in the store, and ringing up purchases. To be successful as a salesperson you must have excellent communication skills. 
                           </p>
                      </div>
                      <div>
                          <img src={person_three} alt="" />
                           <h3>Jon jackson</h3>
                           <small>Product manager</small>
                           <p>
                           A Sales Manager, or Sales Department Manager, is responsible for overseeing daily operations in the sales department. Their duties include hiring and training sales staff, relaying information from upper management.
                           </p>
                      </div>
                  </div>
            </div>
        </div>
    );
};

export default About;