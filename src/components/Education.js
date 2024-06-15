import React from 'react';
import NSUT from "../images/NSUT.jpeg";
import RPVV from "../images/RPVV.jpg";

const Education = () => {
  return (
    <div id="education" className='font-serif bg-slate-200 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold'>EDUCATION</h1>
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-full max-w-4xl'>
          <div className='flex flex-col md:flex-row items-center md:items-start border my-5 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
            <img src={NSUT} alt="NSUT" className='w-full md:w-48 h-48 object-cover' />
            <div className='p-5'>
              <h2 className='text-xl font-semibold'>B.Tech in Computer Science and Engineering</h2>
              <h3 className='text-gray-600'>Netaji Subhas University of Technology, Delhi, India</h3>
              <h4 className='text-gray-800 mt-2'>8.43 CGPA Upto 3rd Semester</h4>
              <p className='text-gray-600'>2022-2026 | Pursuing</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start border my-5 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
            <img src={RPVV} alt="RPVV" className='w-full md:w-48 h-48 object-cover' />
            <div className='p-5'>
              <h2 className='text-xl font-semibold'>11th & 12th | PCM</h2>
              <h3 className='text-gray-600'>Rajkiya Pratibha Vikas Vidyalaya, Gandhi Nagar, Delhi</h3>
              <h4 className='text-gray-800 mt-2'>96.6 Percentage in CBSE Board</h4>
              <p className='text-gray-600'>2019-2021 | Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
