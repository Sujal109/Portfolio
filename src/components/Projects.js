import React from 'react';
import newsPlus from "../images/newsPlus.png";
import SS from '../images/shopsphere.png';
import TEXTUTILS from "../images/TEXTUTILS.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className='bg-orange-100 font-serif'>
        <div className='p-5 text-center font-bold text-2xl md:text-3xl'>
          Overview of Projects made by Me
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              ShopSphere - E-commerce platform
            </div>
            <div className='text-center mb-4'>
              A fully fledged website created using MERN stack.
            </div>
            <img className='w-full rounded-lg mb-4' src={SS} alt="ShopSphere" />
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/Sujal109/ShopSphere" target='_blank' rel="noreferrer">Github Link</a>
              &emsp;
              <a className='text-blue-400 hover:underline' href="https://shopsphere-oncb.onrender.com/" target='_blank' rel="noreferrer">Project Link</a>
            </div>
          </div>
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              News Plus
            </div>
            <div className='text-center mb-4'>
              A news article website made using React and News API.
            </div>
            <img className='w-full rounded-lg mb-4' src={newsPlus} alt="News Plus" />
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/sujal109/NewsApp" target='_blank' rel="noreferrer">Github Link</a>
              &emsp;
              <a className='text-blue-400 hover:underline' href="https://drive.google.com/file/d/1D-WTzkDZ84h5tK75D8cCx36Q9I9Qp6bX/view" target='_blank' rel="noreferrer">Project Link</a>
            </div>
          </div>
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              TextUtils
            </div>
            <div className='text-center mb-4'>
              A basic React app for text manipulation.
            </div>
            <img className='w-full rounded-lg mb-4' src={TEXTUTILS} alt="TextUtils" />
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/Sujal109/textutils" target='_blank' rel="noreferrer">Github Link</a>
              &emsp;
              <a className='text-blue-400 hover:underline' href="https://sujal109.github.io/textutils/" target='_blank' rel="noreferrer">Project Link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
