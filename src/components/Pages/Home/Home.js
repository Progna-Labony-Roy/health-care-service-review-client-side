import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../../Others/Banner/Banner/Banner";
import FAQ from "../../Others/FAQ/FAQ";
import Footer from '../../Others/Footer/Footer';
import Services from "../../Others/Services/Services";

const Home = () => {
  const serviceList = useLoaderData("");
  console.log('list',serviceList)
  useTitle("Home");
  

  return (
    <div>
      <div className="mx-auto">
      
      {/* ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-lg mx-auto ">
        <div className="my-32">
          <h1 className="text-2xl font-semibold italic text-cyan-400">
            Our Services
          </h1>
          <p className="italic">
            Regular dental visits are essential to make sure oral health
            problems — from tooth decay to oral cancer — are detected and
            treated in a timely manner. At our office, your oral health is our
            paramount concern. Dr. Isaacson and Dr. Weisbrod want to make sure
            your teeth stay healthy, function well and look great! From regular
            cleanings and exams to advanced restorative treatments, all of your
            routine dental needs can be met right here.
          </p>
          {serviceList.map((service) => (
            <li key={service._id}>{service.title}</li>
          ))}
        </div>

        <div className="mt-10">
          <Banner></Banner>
        </div>
      </div>

      {/* ------------------------- */}
      
      <Services limit={3}></Services>
      <Link className="flex justify-center" to="/services">
        <button className="btn btn-accent hover:text-white mb-10">
          See All
        </button>
      </Link>
      <FAQ></FAQ>
    </div>
   <Footer></Footer>
    </div>
  );
};

export default Home;
