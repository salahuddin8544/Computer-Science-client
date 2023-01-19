import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const service = useLoaderData();
    const {img,title,description} = service
    return (
        <div className='bg-slate-700 px-4 py-11 text-white'>
           <img className='w-full mb-4 rounded' src={img} alt="" />
           <h3 className='text-4xl mb-4'>{title}</h3>
           <p className='text-xl'>{description}</p>
        </div>
    );
};

export default CardDetails;