import React from "react";
import BannerItems from "../BannerItems/BannerItems";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const data = [
  {
    image: image1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: image2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: image3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: image4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: image5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: image6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full">
      {data.map((bannerImage) => (
        <BannerItems
          key={bannerImage.id}
          bannerImage={bannerImage}
        ></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
