import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import ShowReview from "./ShowReview";

const Review = () => {
  const notify = () => toast("Thans for your review!");
  const [review, setReview] = useState({});

  const handleReviewButton = (event) => {
    event.preventDefault();
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleOnBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div>
      <form onSubmit={handleReviewButton}>
        <input
          onBlur={handleOnBlur}
          type="text"
          name="name"
          placeholder="name"
          className="input w-2/5 input-accent mb-6"
        />
        <br />
        <input
          onBlur={handleOnBlur}
          type="text"
          name="email"
          placeholder="Email"
          className="input w-2/5 input-accent mb-6"
        />
        <br />
        <textarea
          onBlur={handleOnBlur}
          name="review"
          className="textarea textarea-accent w-2/5"
          placeholder="Give Review"
        ></textarea>
        <br />
        <div>
          <button
            onClick={notify}
            className="btn btn-outline btn-accent mt-3"
            type="submit"
          >
            Add review
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </form>
      <h3 className="text-2xl font-semibold italic text-cyan-400 mt-16">All reviews</h3>
      <div className="overflow-x-auto mt-8">
        {/* ---------- */}
        <ShowReview></ShowReview>
      </div>
    </div>
  );
};

export default Review;
