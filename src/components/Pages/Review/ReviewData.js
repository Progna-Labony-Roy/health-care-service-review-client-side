import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewData = ({ singleReview }) => {
  // console.log(singleReview)
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { serviceName, email, reviewText } = singleReview;
  return (
    <tr>
      <td></td>
      <td>{serviceName}</td>
      <td>{email}</td>
      <td>{reviewText}</td>
    </tr>
  );
};

export default ReviewData;
