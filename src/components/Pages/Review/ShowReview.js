import React, { useEffect, useState } from "react";
import ReviewData from "./ReviewData";

const ShowReview = () => {
 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);


  return (
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {reviews.map((singleReview) => (
              <ReviewData
                key={singleReview._id}
                singleReview={singleReview}
              ></ReviewData>
            ))}
      
    </tbody>
   
    
  </table>
</div>


      
  );
};

export default ShowReview;
