import React from 'react';
import './BannerItem.css'
const BannerItem = ({banner}) => {
  const {id,img,title,description,prev,next} = banner
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full h-full md:h-96">
      <div className='carousel-img w-full'>
      <img alt='' src={img} className="w-full  h-screen md:h-96"  />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 nd:right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle me-5">❮</a> 
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
      
      <div className="absolute flex transform -translate-y-1/2 p-4 left-4 md:left-20 top-12 md:top-1/3 w-full md:w-4/5">
          <h3 className='text-2xl md:text-4xl  text-white'>{title}</h3>
      </div>
      <div className="absolute transform --y-1/2 left-4 md:left-20 p-4 top-20 md:top-1/2">
          <p className='md:text-xl text-white'>{description}</p>
      </div>
    </div>    );
};

export default BannerItem;