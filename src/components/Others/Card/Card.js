import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
// import { PhotoProvider, PhotoView } from "react-photo-view";


const Card = ({ service }) => {
  const { _id, name, img, title, price, description1, description2  } = service;

  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      {/* <PhotoProvider>
      <div className="foo">
        {images.map((img, index) => (
          <PhotoView key={index} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider> */}
        <img src={img} alt="ShowImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4 className="font-semibold">{title}</h4>
       
        {/* {description1.length > 150 ? (
            <p>{description1.slice(0, 100) + "..."}</p>
          ) : (
            <>{description1}</>)} */}
            <p>{description1}</p>
          <p>{description2}</p>
     
          <div>
            <p>Price: ${price}</p>
          </div>
       

        <div className="card-actions justify-between">
          
          <div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
          <div>
            <Link to={`/review/${_id}`}>
            <button className="btn btn-accent">Give Review</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;