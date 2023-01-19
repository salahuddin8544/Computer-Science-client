import React from 'react';
import {Link} from 'react-router-dom'
const ServiceCard = ({service}) => {
    const {_id,img,title,description} = service;
    return (
        <div className="card w-80 md:w-96 bg-base-100 mx-auto shadow-xl border-yellow-400">
        <figure><img src={img} alt="img" className='w-' /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{description.slice(0,100)+'..'}</p>
          <div className="">
            <Link className='text-white bg-dark' to={`/services/${_id}`}>
            <button className="btn btn-success">See All</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;