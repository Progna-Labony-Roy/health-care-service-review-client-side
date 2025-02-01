import React from 'react';
import './About.css';
import AboutImage2 from "../../Image/AboutPage2.png";

const About = () => {
    return (
        <div className='about-div lg:mx-12 lg:mt-5'>
            <div className='flex justify-center gap-16 lg:pt-16 lg:px-20'>         <div>
            <img className='hidden lg:block lg:w-[780px]' src={AboutImage2} alt="" />
         </div>
         <div>
            <p className='text-[#274760] lg:text-5xl lg:font-semibold lg:p-20 '>Welcome to
ProHealth Medical &
Healthcare Center</p>
         </div>
        </div>
        </div>
    );
};

export default About;