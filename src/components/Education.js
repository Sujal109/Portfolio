import React from 'react';
import NSUT from "../images/NSUT.jpeg"
import RPVV from "../images/RPVV.jpg";

const Education = () => {
  return (
    <div id="education" className='font-serif'>

      <div className='font-serif flex items-center justify-center text-center px-5 bg-slate-400 py-3'>
        <div>
        <div className=' text-center text-4xl font-bold font-serif' >EDUCATION</div>
          <div className='flex border my-5 bg-slate-100  hover:bg-slate-300 transition duration-500 hover:scale-110'>
            <img src={NSUT} alt="" className='h-48' />
            <div className='p-5 '>
              <h1 className='text-xl font-semibold'>B.Tech in Computer Science and Engineering</h1>
              <h3>Netaji Subhas Umiversity of Technology, Delhi, India</h3>
              <h4>8.43 CGPA Upto 3rd Semester</h4>
              <p>2022-2026 | Pursuing </p>
            </div>
          </div>
          <div className='flex border my-5 bg-slate-100  hover:bg-slate-300 transition duration-500 hover:scale-110'>
            <img src={RPVV} alt="" className='h-48' />
            <div className='p-5 '>
              <h1 className='text-xl font-semibold'>11th & 12th | PCM</h1>
              <h3>Rajkiya Pratibha Vikas Vidyalaya, Gandhi Nagar, Delhi</h3>
              <h4>96.6 Percentage in CBSE Board</h4>
              <p>2019-2021 | Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
