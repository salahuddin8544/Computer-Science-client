import React from 'react';
import img from '../../../assests/portfolio/PortFolio.png'
import Typical from 'react-typical';
import { FaFacebookF,FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
const Proflle = () => {
    return (
        <div className=''>
        <div className='bg-slate-700 py-12 px-4 text-white text-center mx-auto items-center justify-center'>
        <img className='w-96 mx-auto rounded' src={img} alt="" />
        <h2 className='text-white font-bold text-3xl my-2'>Md Salah Uddin</h2>
        <p className='text-1xl text-white'>
            <Typical
            loop={Infinity}
            wrapper='p'
            steps={[
            'CSE STUDENT',
            2000,
            'WEB DEVELOPER',
            2000
            ]}
            />
            </p>
        <p className='mt-4'>Email: salahuddinahmed8544@gmail.com</p>
        <div>
           <div className='flex items-center justify-center space-x-5 text-2xl my-4'>
           <a target={'_blank'} href={'https://web.facebook.com/hmsalauddin.ahmed.5/'}><FaFacebookF className='text-yellow'></FaFacebookF></a>

           <a target={'_blank'} href={'https://github.com/salahuddin8544'}><FaGithub className='text-yellow'></FaGithub></a>

           <a target={'_blank'} href={'https://www.linkedin.com/in/salahuddinhmed/'}><FaLinkedin className='text-yellow'></FaLinkedin></a>

           <a target={'_blank'} href="https://api.whatsapp.com/send/?phone=8801735474562&text&type=phone_number&app_absent=0" className='text-yellow'><FaWhatsapp></FaWhatsapp></a>
           </div>
        </div>
        <button className='border my-2 p-2 border-white text-yellow font-medium'><a target={"_blank"} href="https://drive.google.com/file/d/1B-FnTAzCENplxgBM2f4_FuVF9VCJOzPQ/view?usp=sharing">Download Resume</a></button>
        </div>
       </div>
    );
};

export default Proflle;