import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>

    <div className=' sticky font-serif flex text-white bg-slate-800 justify-around py-5 font-bold '>
      <div className='py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black '>
      <a href="#projects" className=' py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black'>Projects</a>
      </div>
      <div className='py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black '>
      <a href="#skills" className=' py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black'>Skills</a>
      </div>
      <div className='py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black '>
      <a href="#education" className=' py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black'>Education</a>
      </div>
      <div className='py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black '>
      <a href="#aboutMe" className=' py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black'>About Me</a>
      </div>
      <div className='py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black '>
      <a href="#contactMe" className=' py-2 rounded-xl px-2 hover:bg-slate-200 hover:text-black'>Contact Me</a>
      </div>
    </div>
    </>
  )
}

export default Navbar
