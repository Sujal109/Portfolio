import React from 'react'
import newsPlus from "../images/newsPlus.png"
import SS from '../images/shopsphere.png'
import TEXTUTILS from "../images/TEXTUTILS.png"

const Projects = () => {
  return (
    <>
      <div id="projects" className='bg-orange-100 font-serif'>
        <div className='p-5 bg-orange-100 text-center text-3xl '> Overview of Projects made by Me</div>
        <div className='flex '>
          <div className='p-4 m-12 bg-slate-800 text-white shadow-2xl  '>
            <div className='text-2xl text-center font-semibold underline'>ShopSphere - E-commerce platform</div>
            <div className='text-l text-center'>A fully fledged website created using MERN stack.</div>
            <img cla src={SS} alt="" />
            <div className='text-center'>
              <a href="https://github.com/Sujal109/ShopSphere">Github Link </a>
              &emsp;
              <a href="https://shopsphere-oncb.onrender.com/">Project Link</a>
            </div>
          </div>
          <div className='p-4 m-12 bg-slate-800 text-white shadow-2xl '>
            <div className='text-2xl text-center font-semibold underline'>News Plus  </div>
            <div className='text-l text-center'> A news article website made using react and news API</div>
            <img src={newsPlus} alt="" />
            <div className='text-center'>
            <a href="https://github.com/sujal109/NewsApp">Github Link </a>
            &emsp;
            <a href="https://drive.google.com/file/d/1D-WTzkDZ84h5tK75D8cCx36Q9I9Qp6bX/view">Project Link </a>
            </div>
          </div>
          <div className='p-4 m-12 bg-slate-800 text-white shadow-2xl '>
            <div className='text-2xl text-center font-semibold underline'>TextUtils</div>
            <div className='text-l text-center'>A basic react app do text manipulation.</div>
            <img src={TEXTUTILS} alt="" />
            <div className='text-center'>
            <a href="https://github.com/Sujal109/textutils">Github Link </a> &emsp;
            <a href="https://sujal109.github.io/textutils/">Project Link </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default Projects
