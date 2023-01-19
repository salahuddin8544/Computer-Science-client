import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
const [services, setServices] = useState([])
useEffect(()=>{
    fetch('https://computer-server.vercel.app/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
        <div className='grid gap-5 pt-5 pb-5 bg-slate-700 gird-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3'>
            {
                services.map(service=><ServiceCard 
                    key={service._id}
                    service = {service}
                    >

                    </ServiceCard>)
            }
        </div>
    );
};

export default Services;