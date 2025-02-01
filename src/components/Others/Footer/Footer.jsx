import React from 'react';
import "./Footer.css";
import FooterTop from "../../Image/FooterTop.png";

const Footer = () => {
    return (
        <div className="md:mt-24">
            <div className="hidden img-div w-full md:flex justify-center -mb-24">
            <img className='h-36' src={FooterTop} alt="" />
            </div>
            <div className='footer text-[#274760] md:px-32 md:pt-24 pt-32'>
            {/* one */}
            <div>
                <p>123 Anywhere St., Any City 12345</p>
                <p>123-456-7890</p><p>hellocallcenter@gmail.com</p>
            </div>

            {/* two */}
            <div className='hidden md:block'>
            <p>About Us</p>
            <p>Departments</p>
            <p>Doctors</p>
            <p>TimeTable</p>
            <p>Appointment</p>
            <p>Testimonials</p>
            </div>

            {/* three */}
            <div className='hidden md:block'>
                <p>Blog</p>
                <p>Contact Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms and conditions</p>
            </div>
            <div className='-mt-24 md:mt-0'>
                <p className='text-xl font-bold text-[#274760]'>Be Our Subscribers</p>
                <p>To get the latest news about health from our
                experts</p>
            </div>
        </div>
        <div className="bg-[#307BC4] h-16 flex md:justify-between justify-center text-white p-5">
            <p className='footer-end font-semibold hidden md:block'>Follow Us</p>
            <p>Copyright © 2024  All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;