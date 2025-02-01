import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import linkArrow from "../../Image/linkArrow.png";
// import { PhotoProvider, PhotoView } from "react-photo-view";


const Card = ({ service }) => {
  const { _id, name, img, title, price, description1, description2  } = service;

  
  return (
    <div className="card w-[440px] bg-base-100 shadow-2xl">
      
      {/* <PhotoProvider>
      <div className="foo">
        {images.map((img, index) => (
          <PhotoView key={index} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider> */}
        <img className="h-10 w-10 lg:mx-10 lg:mt-5 lg:-mb-5" src={img} alt="ShowImage" />
      <div className="card-body">
        {/* <h2 className="card-title">{name}</h2> */}
        <h4 className="font-semibold">{title}</h4>
       
        {/* {description1.length > 150 ? (
            <p>{description1.slice(0, 100) + "..."}</p>
          ) : (
            <>{description1}</>)} */}
            <p>{description1}</p>
          <p>{description2}</p>
     
          {/* <div>
            <p>Price: ${price}</p>
          </div> */}
       

        <div className="card-actions justify-end">
          
          <div>
            <Link to={`/services/${_id}`}>
              <img className="lg:h-7" src={linkArrow} alt="" />
            </Link>
          </div>
          {/* <div>
            <Link to={`/review/${_id}`}>
            <button className="btn btn-accent">Give Review</button>
            </Link>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;