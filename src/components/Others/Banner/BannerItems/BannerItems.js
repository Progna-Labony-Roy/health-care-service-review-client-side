import React from "react";
import './BannerItem.css'

const BannerItems = ({ bannerImage }) => {
  const { image, id, prev, next } = bannerImage;
  return (
    <div id={`bannerImage${id}`} className="carousel-item relative w-full">
      <img className="banner-image" src={image} alt=''/>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#bannerImage${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#bannerImage${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
