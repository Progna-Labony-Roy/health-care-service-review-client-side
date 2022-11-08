import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Footer from "../../Others/Footer/Footer";
import Services from "../../Others/Services/Services";

const Home = () => {
  const serviceList = useLoaderData("");
  useTitle('Home')

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold italic text-cyan-400 my-8 flex justify-center">
          We're Glad You Found Us
        </h1>
        <div className="my-32">
          <h1 className="text-2xl font-semibold italic text-cyan-400 my-8">
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
        <Services></Services>
        <Link className="flex justify-center" to="/services">
          <button className="btn btn-accent hover:text-white mb-10">
            See All
          </button>{" "}
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
