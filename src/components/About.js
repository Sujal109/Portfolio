import React from 'react'
import Leetcode from "../images/Leetcode.png"
import Github from "../images/github.png"
import Codeforces from "../images/cf.png"
const About = () => {
  return (
    <div id="aboutMe" className=' bg-orange-200 '>
    <div className='items-center flex-1 justify-center text-center px-20 bg-orange-100 py-3 font-serif'>
        <div className='text-4xl font-bold my-3'>ABOUT ME</div>
        <div className='text-4xl font-medium  my-2 text-indigo-950'>Sujal Aggarwal</div>
        <div className='text-2xl my-2'>Software Developer </div>
        <div className='text-xl'>I am a Computer Science and Engineering undergraduate student at Netaji Subhas University of Technology of batch 2026. I am a passionate full stack web developer. I love solving DSA problems. I can create websites according to the need of the clients.
        </div>
        <div className='m-10'>
          <a className='border p-2 rounded-2xl bg-slate-200 hover:scale-125 transition duration-500 ' href="https://drive.google.com/file/d/11aJ6CL9SaXOuBizVqnwnQBRT-DtNti3w/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume Link</a>
        </div>

        <div className='flex justify-center my-10 '>
          <div className='mx-5'>
            <a href="https://leetcode.com/sujalaggarwal2003" target='_blank' rel="noopener noreferrer">
            <img className='h-12 rounded-xl' src={Leetcode} alt="" />
            </a>
          </div>
          <div className='mx-5'>
            <a href="https://codeforces.com/profile/sujal109" target='_blank' rel="noopener noreferrer">
            <img className='h-12' src={Codeforces} alt="" />
            </a>
          </div>
          <div className='mx-5'>
            <a href="https://www.github.com/sujal109" target='_blank' rel="noopener noreferrer">
            <img className='h-12' src={Github} alt="" />
            </a>
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default About
