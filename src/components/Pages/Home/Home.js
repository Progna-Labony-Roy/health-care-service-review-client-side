import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import "./Home.css";
import Vector from "../../Image/Vector.png";
import ambulance from "../../Image/ambulance.png";
import icon from "../../Image/icon.png";
import compassion from "../../Image/compassion.png";
import integrity from "../../Image/integrity.png";
import excellence from "../../Image/excellence.png";
import department_icon_1 from "../../Image/department_icon_1.png";
import department_icon_2 from "../../Image/department_icon_2.png";
import department_icon_3 from "../../Image/department_icon_3.png";
import department_icon_4 from "../../Image/department_icon_4.png";
import department_icon_5 from "../../Image/department_icon_5.png";
import AboutUs2 from "../../Image/AboutUs2.png";
import Arrow from "../../Image/Arrow.png";
import award from "../../Image/award.png"
import Footer from "../../Others/Footer/Footer.jsx"


const Home = () => {
  const serviceList = useLoaderData("");
  console.log("list", serviceList);
  useTitle("Home");

  return (
    <div className="main">
      {/* -----------Banner----------- */}
      <div className="introduction">
        <div className="md:w-1/2 md:p-24 p-10">
          <h1 className="text-6xl font-semibold md:text-cyan-800 text-white">
            Your Partner in
            <br></br>
            Health and Wellness
          </h1>
          <p className="md:text-cyan-800 text-black mt-10">
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier.
          </p>
        </div>
      </div>

      {/* -----------Contact Info-------------- */}
      <div className="contact-info md:flex md:w-3/4 rounded-lg shadow-2xl bg-slate-200 justify-between md:py-10 py-5 md:px-24 px-10">
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
          <div>
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
        <button className="bg-[#236ab1] px-5 text-white md:mt-1 mt-4 rounded-3xl font-bold hover:bg-cyan-700 mx-20 md:mx-0">
          Book Now
        </button>
      </div>

      {/* --------------- */}
      {/* Our Values section */}
      <div className="values md:mt-40 mt-60 
       md:mx-32">
        <h1 className="flex justify-center md:text-5xl text-4xl font-bold">Our values</h1>
        <div className="md:flex gap-20 md:mt-16">
          {/* Compassion */}
          <div className="mt-5 shadow-xl rounded-lg p-7 m-12  md:m-0">
            <div className="flex gap-2 justify-center mb-5">
              <div className="image-div bg-[#307BC4] rounded-full">
                <img className="h-5 m-2" src={compassion} alt="" />
              </div>
              <p className="text-xl font-semibold mt-2">Compassion</p>
            </div>
            <p className="text-center">
              We understand that seeking medical care can be a stressful and
              emotional experience, and we strive to create a welcoming and
              supportive environment that puts our patients at ease and every
              one.
            </p>
          </div>
          {/* Excellence */}
          <div className="shadow-xl rounded-lg p-7 m-12  md:m-0">
            <div className="flex gap-2 justify-center mb-5">
              <div className="image-div bg-[#307BC4] rounded-full">
                <img className=" h-5 m-2" src={excellence} alt="" />
              </div>
              <p className="text-xl font-semibold mt-2">Excellence</p>
            </div>
            <p className="text-center">
              We are committed to providing excellent medical care and services
              to our patients. We believe in continuously improving our skills,
              knowledge, and resources to ensure that we deliver the highest
              quality care possible.
            </p>
          </div>
          {/* Integrity */}
          <div className="mt-5 shadow-xl rounded-lg p-7 m-12  md:m-0">
            <div className="flex gap-2 justify-center mb-5">
              <div className="image-div bg-[#307BC4] rounded-full">
                <img className="h-5 m-2" src={integrity} alt="" />
              </div>
              <p className="text-xl font-semibold mt-2">Integrity</p>
            </div>
            <p className="text-center">
              We believe in practicing medicine with integrity and honesty. We
              are transparent in our communication and decision-making
              processes, and we always put our patient's interests first &
              provide best solution.
            </p>
          </div>
        </div>
        {/* Second div */}
        <div className="md:flex justify-center gap-20 md:mx-52 md:mt-16">
          {/* Respect */}
          <div className=" shadow-xl rounded-lg p-7 mx-12  md:m-0">
            <div className="flex gap-2 justify-center mb-5">
              <div className="image-div bg-[#307BC4] rounded-full">
                <img className="h-5 m-2" src={compassion} alt="" />
              </div>
              <p className="text-xl font-semibold mt-2">Respect</p>
            </div>
            <p className="text-center">
              We treat all individuals with respect and dignity, regardless of
              their background, beliefs, or circumstances. We believe that every
              person deserves to be treated with compassion and kindness.
            </p>
          </div>
          {/* Teamwork */}
          <div className=" shadow-xl rounded-lg p-7 m-12  md:m-0">
            <div className="flex gap-2 justify-center mb-5">
              <div className="image-div bg-[#307BC4] rounded-full">
                <img className=" h-5 m-2" src={compassion} alt="" />
              </div>
              <p className="text-xl font-semibold mt-2">Teamwork</p>
            </div>
            <p className="text-center">
              We believe in working collaboratively with our team membersvand
              other healthcare professionals to provide comprehensive and
              effective care to our patients.
            </p>
          </div>
        </div>
      </div>

      {/* -----------About Us------------ */}
      <div className="md:flex justify-center md:mt-40 mt-28 md:mx-24 mx-12 md:gap-32">
        <div className="about-image md:w-1/2">
          <img className="about-image-two hidden md:block" src={AboutUs2} alt="" />
        </div>
        <div className="about md:w-1/2 md:p-10">
      <h1 className="md:text-5xl text-4xl md:mb-5 mb-10 font-bold flex justify-center md:justify-start">About Us</h1>

          <h4 className="md:text-2xl text-xl text-[#307BC4] font-semibold md:mb-12 mb-5">PRO HEALTH</h4>
          <div className="flex">
          <img className="mr-7 h-7" src={Arrow} alt="" />
          <div>
          <p className="text-[#274760] text-xl mb-3">ProHealth is a team of experienced medical professionals</p>
          <p className="text-[#274760] text-xl text-justify">Dedicated to providing top-quality healthcare services.We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.</p>
          </div>
          </div>
        </div>
      </div>

      
      {/* ----------------------- */}
      {/* Department */}
      <div className="departments">
      <h1 className="flex justify-center md:text-5xl text-4xl my-20 font-bold">
        Departments
      </h1>
      </div>

      <div className="md:flex justify-center mx-auto gap-10 all-departments  hidden">
        <div className="shadow-2xl p-8 rounded-2xl">
          <img className="mx-auto" src={department_icon_1} alt="" />
          <p className="mx-auto font-semibold text-lg text-center mt-3">Emergency <br /> Department</p>
        </div>
        <div className="shadow-2xl p-8 rounded-2xl">
          <img src={department_icon_2} alt="" />
          <p className="mx-auto font-semibold text-lg text-center mt-3">Pediatric <br /> Department</p>
        </div>
        <div className="shadow-2xl p-8 rounded-2xl">
          <img className="mx-auto" src={department_icon_3} alt="" />
          <p className="mx-auto font-semibold text-lg text-center mt-3">Gynecology <br /> Department</p>
        </div>
        <div className="shadow-2xl p-8 rounded-2xl">
          <img className="mx-auto" src={department_icon_4} alt="" />
          <p className="mx-auto font-semibold text-lg text-center mt-3">Cardiology <br /> Department</p>
        </div>
        <div className="shadow-2xl p-8 rounded-2xl">
          <img className="mx-auto" src={department_icon_5} alt="" />
          <p className="mx-auto font-semibold text-lg text-center mt-3">Neurology <br /> Department</p>
        </div>
      </div>

      {/* ------------Another Departments----------- */}
      <div className="md:flex md:mt-32 justify-center md:mx-40 mx-20 md:gap-14">
        {/* one */}
        <div className="md:w-1/4 mt-16">
        <div className="flex">
        <img className="bg-[#307BC4] rounded py-2 px-3 h-14 mr-5" src={award} alt="" />
          <h4 className="text-justify font-bold">Malcolm Baldrige
National Quality
Award</h4>
        </div>
        <p className="mt-5 text-[#274760]  text-justify">This award recognizes
healthcare organizations that
have demonstrated excellence
in leadership, strategic
planning, customer and
employee satisfaction, and
operational efficiency.</p>
      </div>

      {/* two */}
      <div className="md:w-1/4 mt-16">
        <div className="flex">
        <img className="bg-[#307BC4] rounded py-2 px-3 h-14 mr-5" src={award} alt="" />
          <h4 className="text-justify font-bold">HIMSS Davies
          Award</h4>
        </div>
        <p className="mt-5 text-[#274760]  text-justify">This award recognizes
healthcare organizations that
have used health information
technology to improve patient
outcomes and reduce costs.</p>
      </div>
      {/* three */}
      <div className="md:w-1/4 mt-16">
        <div className="flex">
        <img className="bg-[#307BC4] rounded py-2 px-3 h-14 mr-5" src={award} alt="" />
          <h4 className="text-justify font-bold">Healthgrades
National’s Best
Hospital</h4>
        </div>
        <p className="mt-5 text-[#274760]  text-justify">This recognition is given to
hospitals that have achieved
high ratings for clinical quality
and patient safety across
multiple specialties and
procedures.</p>
      </div>
      {/* four */}
      <div className="md:w-1/4 mt-16">
        <div className="flex">
        <img className="bg-[#307BC4] rounded py-2 px-3 h-14 mr-5" src={award} alt="" />
          <h4 className="text-justify font-bold">Joint
Commission Gold
Seal of Approval</h4>
        </div>
        <p className="mt-5 text-[#274760] text-justify">This recognition is given to
hospitals that have met
rigorous standards for patient
safety and quality of care.</p>
      </div>

      </div>

      {/* ----------Footer--------- */}
      <Footer></Footer>

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
