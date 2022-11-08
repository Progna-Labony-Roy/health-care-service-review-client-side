import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCard = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, img, title, price, description1, description2 } = details;
  return (
    <div className="">
      <img src={img} alt="ShowImage" />
      <div className="">
        <h2 className="">{name}</h2>
        <h4 className="">{title}</h4>
        <p>{description1}</p>
        <p>{description2}</p>
        <div>
          <p>Price: ${price}</p>
        </div>
        <div>
            <Link to='/home'>
              <button className="btn btn-accent">Home</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default DetailsCard;
