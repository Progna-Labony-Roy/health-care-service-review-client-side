import React from 'react';
import './About.css';
import AboutImage2 from "../../Image/AboutPage2.png";
import Services from './Services/Services';
import { Link } from 'react-router-dom';
import Footer from "../../Others/Footer/Footer.jsx"

const About = () => {
    
    return (
     <div>
           <div className='lg:mx-12'>
            <div className='about-div lg:mt-5'>
            <div className='flex justify-center gap-16 lg:pt-16 lg:px-20'>         <div>
            <img className='hidden lg:block lg:w-[780px]' src={AboutImage2} alt="" />
         </div>
         <div className='text-[#274760]'>
            <p className='lg:text-5xl lg:font-semibold lg:p-20 '>Welcome to
ProHealth Medical &
Healthcare Center</p>
<p>Your Partner in Health and Wellness</p>
         </div>
        </div>
        </div>

        <Services limit={5}></Services>
        <div>
        <Link className="flex justify-end" to="/services">
        <button className="bg-[#307BC4] text-white md:px-5 md:py-3 rounded">
          See All
        </button>
      </Link>
        </div>
        </div>
        <Footer></Footer>
     </div>
    );
};

export default About;