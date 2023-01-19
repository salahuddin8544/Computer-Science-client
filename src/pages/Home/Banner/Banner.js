import React,{useEffect, useState} from 'react';
import BannerItem from './BannerItem';
const Banner = () => {
    const [banners, setbanners] = useState([])
    useEffect(()=>{
      fetch('Banner.json')
      .then(res=>res.json())
      .then(data=> setbanners(data))
    },[])

    return (
        <div>
          <div className='carousel w-full'>
          {
            banners.map(banner=><BannerItem 
            key={banner.id}
            banner = {banner}
            ></BannerItem> )
          }
          </div>
        </div>
    );
};

export default Banner;