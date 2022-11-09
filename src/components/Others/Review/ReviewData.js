import React from "react";

const ReviewData = ({ singleReview }) => {
  // console.log(singleReview)
  const { name, email, review } = singleReview;
  return (
    
      <tr>
        <td></td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{review}</td>
      </tr>

  );
};

export default ReviewData;
