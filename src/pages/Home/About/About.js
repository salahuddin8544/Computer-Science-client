import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-700 py-12 px-4 text-white'>
        <div className='flex items-center  space-x-3'>
            <h3 className='text-yellow text-4xl font-bold'>About</h3>
          < hr />
        </div>
        <div>
            <h2 className='text-2xl my-4'>Hi, I ma Salah Uddin <span className='mx-2'>&#9995;</span></h2>
            <p className='text-1xl'>I am a Full stack developer specializing in the MERN stack. I have worked in web development sector for more than 2 years. I used to build website html5,css3,js, react,next js.  I have worked on more than 20 projects with different clients around the world. Now I am changing my development technology and building my career with MERN stack.</p>
            <br />
            <p className='text-1xl'>I am a dependable web developer with a strong work ethic and an excellent customer service record. Deeply knowledgeable in a wide variety of computer languages, including React, JavaScript, Node, and Mongodb while understanding principles and techniques of initial website construction and ongoing maintenance. Strong communicator and works best under pressure with tight deadlines.</p>
        </div>
    </div>
    );
};

export default About;