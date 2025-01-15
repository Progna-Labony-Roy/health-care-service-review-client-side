import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import "./Home.css";
import Vector from "../../Image/Vector.png";
import ambulance from "../../Image/ambulance.png";
import icon from "../../Image/icon.png";
import compassion from "../../Image/compassion.png";
import integrity from "../../Image/integrity.png";
import excellence from "../../Image/excellence.png"

const Home = () => {
  const serviceList = useLoaderData("");
  console.log('list',serviceList)
  useTitle("Home");
  

  return (
      <div className="main">
      
      {/* -----------Banner----------- */}
      <div className="introduction">
          <div className="w-1/2 p-24">
          <h1 className="text-6xl font-semibold text-cyan-800">
          Your Partner in
          <br></br>
          Health and Wellness
          </h1>
          <p className="text-cyan-800 mt-10">
          We are committed to providing you with the best medical
and healthcare services to help you live healthier and
happier.
          </p> 
          </div>
      </div>

      {/* -----------Contact Info-------------- */}
      <div className="contact-info flex w-3/4 rounded-lg shadow-2xl bg-slate-200 justify-between py-10 px-24">
        {/* Phone */}
        <div className="flex">
        <div className="bg-[#307BC4] h-10 mx-3 mt-1 rounded-full">
        <img className="bg-[#307BC4] h-6 m-2" src={icon} alt="" />
        </div>
          <div>
            <p>Phone</p>
            <p>123-456-7890</p>
          </div>
        </div>
        {/* Ambulance */}
        <div className="flex">
        <div className="bg-[#307BC4] h-10 mx-3 mt-1 rounded-full">
        <img className="bg-[#307BC4] h-6 m-2" src={ambulance} alt="" />
        </div>
          <div >
            <p>Ambulance</p>
            <p>876-256-876</p>
          </div>
        </div>
        {/* Location */}
        <div className="flex">
          <div className="bg-[#307BC4] h-10 mx-3 mt-1 rounded-full">
          <img className="bg-[#307BC4] h-6 m-2" src={Vector} alt="" />
          </div>
          <div>
            <p>Location</p>
            <p>New York, US</p>
          </div>
        </div>
        {/* button */}
        <button className="bg-[#236ab1] px-5 text-white mt-1 rounded-3xl font-bold hover:bg-cyan-700">Book Now</button>
      </div>


      {/* --------------- */}
      {/* Our Values section */}
      <div className="values mt-40 mx-32">
        <h1 className="flex justify-center text-5xl font-bold">Our values</h1>
     <div className="flex gap-20 mt-16">
         {/* Compassion */}
         <div className="mt-5 shadow-xl rounded-lg p-7">
        <div className="flex gap-2 justify-center mb-5">
        <div className="image-div bg-[#307BC4] rounded-full">
        <img className="h-5 m-2" src={compassion} alt="" />
        </div>
        <p className="text-xl font-semibold mt-2">Compassion</p>
        </div>
        <p className="text-center">We understand that seeking medical
care can be a stressful and emotional
experience, and we strive to create a
welcoming and supportive environment
that puts our patients at ease and every
one.</p>
        </div>
        {/* Excellence */}
        <div className="shadow-xl rounded-lg p-7">
        <div className="flex gap-2 justify-center mb-5">
        <div className="image-div bg-[#307BC4] rounded-full">
        <img className=" h-5 m-2" src={excellence} alt="" />
        </div>
        <p className="text-xl font-semibold mt-2">Excellence</p>
        </div>
        <p className="text-center">We are committed to providing excellent
medical care and services to our
patients. We believe in continuously
improving our skills, knowledge, and
resources to ensure that we deliver the
highest quality care possible.</p>
        </div>
        {/* Integrity */}
        <div className="mt-5  shadow-xl rounded-lg p-7">
        <div className="flex gap-2 justify-center mb-5">
        <div className="image-div bg-[#307BC4] rounded-full">
        <img className="h-5 m-2" src={integrity} alt="" />
        </div>
        <p className="text-xl font-semibold mt-2">Integrity</p>
        </div>
        <p className="text-center">We believe in practicing medicine with
integrity and honesty. We are
transparent in our communication and
decision-making processes, and we
always put our patient's interests first &
provide best solution.</p>
        </div>
     </div>
      {/* Second div */}
      <div className="flex justify-center gap-20 mx-52 mt-16">
          {/* Respect */}
          <div className=" shadow-xl rounded-lg p-7">
        <div className="flex gap-2 justify-center mb-5">
        <div className="image-div bg-[#307BC4] rounded-full">
        <img className="h-5 m-2" src={compassion} alt="" />
        </div>
        <p className="text-xl font-semibold mt-2">Respect</p>
        </div>
        <p className="text-center">We treat all individuals with respect and dignity, regardless of their background,
beliefs, or circumstances. We believe
that every person deserves to be treated
with compassion and kindness.</p>
        </div>
        {/* Teamwork */}
        <div className=" shadow-xl rounded-lg p-7">
        <div className="flex gap-2 justify-center mb-5">
        <div className="image-div bg-[#307BC4] rounded-full">
        <img className=" h-5 m-2" src={compassion} alt="" />
        </div>
        <p className="text-xl font-semibold mt-2">Teamwork</p>
        </div>
        <p className="text-center">We believe in working collaboratively
with our team membersvand other
healthcare professionals to provide
comprehensive and effective care to our
patients.</p>
        </div>
      </div>
      </div>

      
      {/* <Services limit={3}></Services>
      <Link className="flex justify-center" to="/services">
        <button className="btn btn-accent hover:text-white mb-10">
          See All
        </button>
      </Link>
      <FAQ></FAQ>
   <Footer></Footer> */}
    </div>
  );
};

export default Home;
