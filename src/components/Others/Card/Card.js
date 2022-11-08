import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Card = ({ service }) => {
  const { _id, name, img, title, price, description1 } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="ShowImage" />
        {/* <PhotoView src={img}>
          <img src={img} style={{ objectFit: "cover" }} alt="" />
        </PhotoView> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4 className="font-semibold">{title}</h4>
        <>
          {description1.length > 150 ? (
            <p>{description1.slice(0, 100) + "..."}</p>
          ) : (
            <>{description1}</>
          )}
        </>

        <div className="card-actions justify-between">
          <div>
            <p>Price: ${price}</p>
          </div>
          <div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
