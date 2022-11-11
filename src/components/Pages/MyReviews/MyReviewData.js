import React from "react";

const MyReviewData = ({ myReview, handleDelete }) => {
  const {_id,serviceName, email, reviewText ,displayName,photoURL ,price  } = myReview;

  
  return (

    <tr>
    <th>
    <label>
       <button onClick={() =>handleDelete(_id)} className="btn btn-ghost">X</button>
     </label>
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
    <td>
    <button className="btn btn-ghost btn-xs">Edit</button>
    </td>
  </tr>
  
  );
};

export default MyReviewData;
