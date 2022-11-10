import React from "react";

const MyReviewData = ({ myReview, handleDelete }) => {
  const {_id, name, email, review } = myReview;

  
  return (
    
    <tr>
      <th>
        <label>
        <button onClick={() =>handleDelete(_id)} className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{review}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Edit</button>
      </th>
    </tr>
  );
};

export default MyReviewData;
