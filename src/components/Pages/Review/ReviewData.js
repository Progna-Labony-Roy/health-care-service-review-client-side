import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewData = ({ singleReview }) => {
  // console.log(singleReview)
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { serviceName, email, reviewText ,displayName,photoURL ,price } = singleReview;
  return (
    <tr>
    <th>
     
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photoURL} alt="pic"/>
          </div>
        </div>
        <div>
          <div className="font-bold">{displayName}</div>
          <div className="text-sm opacity-50">{email}</div>
        </div>
      </div>
    </td>
    <td>
      {serviceName}
      <br/>
      <span className="badge badge-ghost badge-sm">{price}</span>
    </td>
    <td>{reviewText}</td>
  </tr>
  );
};

export default ReviewData;
