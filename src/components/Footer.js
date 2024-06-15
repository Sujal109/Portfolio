import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id="contactMe">
    <div className='flex-1 py-5 justify-center items-center text-center text-white bg-slate-950'>
        <div className='text-2xl'> Thankyou for visiting my Portfolio Website.</div>
        <div className='text-4xl ' > Contact Info.</div>
        <div className='underline'>aggarwalsujal109@gmail.com</div>
        <div className='underline'>Netaji Subhas University of Technology</div>
        <div className='underline'>Delhi, India</div>
        <div className='text-2xl my-3 '>
        <a href="https://www.linkedin.com/in/sujal-aggarwal-547663254/">
        <FontAwesomeIcon className='mx-3 p-4 transition hover:bg-white hover:text-emerald-950 rounded-full' icon={faLinkedin} />
        </a>

        <a href="https://github.com/sujal109">
        <FontAwesomeIcon className='mx-3 p-4 transition hover:bg-white hover:text-emerald-950 rounded-full' icon={faGithub} />
        </a>
        

        
        </div>
    </div>
      
    </div>
  )
}

export default Footer
