import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Review = () => {
  const { _id, name, price } = useLoaderData();
  const { user } = useContext(AuthContext);


  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const reviewText = form.reviewText.value;

    const reviews = {
      service_id :_id,
      serviceName: name,
      price,
      customer: username,
      email,
      reviewText,
    };

    // save to database
    
      fetch("https://service-review-server-side-jet.vercel.app/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if(data.acknowledged){
            alert('Thanks for your review');
            form.reset();
          }
        })
        .catch(error => console.error(error))
    
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-7">
      <form onSubmit={handleAddReview}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="input w-2/5 input-accent mb-6"
          required
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input w-2/5 input-accent mb-6"
          required
        />
        <br />
        <textarea
          name="reviewText"
          className="textarea textarea-accent w-2/5"
          placeholder="Give Review"
          required
        ></textarea>
        <br />
        <div className="flex">
         
            <button
              
              className="btn btn-outline btn-accent mt-3 me-3"
              type="submit"
            >
              Add review
            </button>
            
          
          <div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-outline btn-accent mt-3">
                See all review
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;
