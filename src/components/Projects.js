import React from 'react';
import newsPlus from "../images/newsPlus.png";
import SS from '../images/shopsphere.png';
import TEXTUTILS from "../images/TEXTUTILS.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className='bg-orange-100 font-serif'>
        <div className='p-3 md:p-5 text-center font-bold text-xl md:text-2xl lg:text-3xl'>
          Overview of Projects made by Me
        </div>
        <div className='flex flex-wrap justify-center'>
          {/* ShopSphere */}
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              ShopSphere - E-commerce platform
            </div>
            <div className='text-center mb-4'>
              A fully fledged website created using MERN stack.
            </div>
            <a href="https://shopsphere-oncb.onrender.com/" target='_blank' rel="noreferrer">
              <img className='w-full rounded-lg mb-4 hover:opacity-80 transition' src={SS} alt="ShopSphere" />
            </a>
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/Sujal109/ShopSphere" target='_blank' rel="noreferrer">Github Link</a>
            </div>
          </div>
          {/* News Plus */}
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              News Plus
            </div>
            <div className='text-center mb-4'>
              A news article website made using React and News API.
            </div>
            <a href="https://drive.google.com/file/d/1D-WTzkDZ84h5tK75D8cCx36Q9I9Qp6bX/view" target='_blank' rel="noreferrer">
              <img className='w-full rounded-lg mb-4 hover:opacity-80 transition' src={newsPlus} alt="News Plus" />
            </a>
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/sujal109/NewsApp" target='_blank' rel="noreferrer">Github Link</a>
            </div>
          </div>
          {/* TextUtils */}
          <div className='p-4 m-4 bg-slate-800 text-white shadow-2xl rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3'>
            <div className='text-xl md:text-2xl text-center font-semibold underline mb-2'>
              TextUtils
            </div>
            <div className='text-center mb-4'>
              A basic React app for text manipulation.
            </div>
            <a href="https://sujal109.github.io/textutils/" target='_blank' rel="noreferrer">
              <img className='w-full rounded-lg mb-4 hover:opacity-80 transition' src={TEXTUTILS} alt="TextUtils" />
            </a>
            <div className='text-center'>
              <a className='text-blue-400 hover:underline' href="https://github.com/Sujal109/textutils" target='_blank' rel="noreferrer">Github Link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
