import React from 'react'
import CPP from '../images/cpp.png'
import HTML from '../images/HTML.png'
import JS from '../images/JS.png'
import CSS from "../images/CSS.png"
import MONGODB from '../images/mongoDB.png'
import EXPRESS from '../images/express-js.png'
import REACTJS from '../images/react.png'
import NODEJS from "../images/NodeJS.png"
import PYTHON from "../images/Python.png"
const Skills = () => {
  return (
    <div id="skills" className='bg-slate-400 '>
    <div className=' font-serif h-3/4 flex justify-center bg-slate-400 text-4xl p-4 font-bold'>MY SKILLS</div>
    <div className='h-3/4 flex justify-center bg-slate-400'>
      <div className='flex flex-wrap w-2/3'>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={CPP} alt="" />
      </div>
      <div className='flex p-6 m-16 h-48 w-48 bg-auto bg-white rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-3xl' src={HTML} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={CSS} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full   transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={JS} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={MONGODB} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full transition duration-500 hover:scale-125'>
        <img src={EXPRESS} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={REACTJS} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={NODEJS} alt="" />
      </div>
      <div className='flex m-16 h-48 w-48 bg-red-50 rounded-full  transition duration-500 hover:scale-125'>
        <img className='rounded-full' src={PYTHON} alt="" />
      </div>
      
      </div>
      
    </div>
    </div>
  )
}

export default Skills
