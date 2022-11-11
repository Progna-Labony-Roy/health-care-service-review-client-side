import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Review from "../../Pages/Review/Review";
import ShowReview from "../../Pages/Review/ShowReview";


const DetailsCard = () => {
  
  const { user } =useContext(AuthContext);
  const details = useLoaderData();
  // console.log(details);
  const { _id, name, img, title, price, description1, description2 } = details;


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto my-11">
      <div className="details-section">
      <h2 className="text-2xl font-semibold italic text-cyan-400 mb-10">Learn More</h2>
        <img src={img} alt="ShowImage" />
        <div className="">
          <h2 className="text-xl font-semibold my-5">{name}</h2>
          <h4 className="font-bold mb-2">{title}</h4>
          <p>{description1}</p>
          <p>{description2}</p>
          <div>
            <p>Price: ${price}</p>
          </div>
          <div className="my-10">
            <Link to="/">
              <button className="btn btn-accent">Home</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {
          user?.email ?
          <>
          <div className="">
            <h2 className="text-2xl font-semibold italic text-cyan-400 mb-10">Reviews</h2>
          <Review></Review>
        </div>
          </>
          :
          <>
          <div className="my-10">
          
            <div>
            <Link to="/login">
            <button className="btn btn-accent">Give Review</button>
            
            </Link>
            </div>
         
        </div></>
        }
         <h3 className="text-2xl font-semibold italic text-cyan-400 my-10">All reviews</h3>
        <ShowReview></ShowReview>
      </div>
    </div>
  );
};

export default DetailsCard;
