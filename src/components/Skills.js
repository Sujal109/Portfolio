import React from 'react';
import CPP from '../images/cpp.png';
import HTML from '../images/HTML.png';
import JS from '../images/JS.png';
import CSS from '../images/CSS.png';
import MONGODB from '../images/mongoDB.png';
import EXPRESS from '../images/express-js.png';
import REACTJS from '../images/react.png';
import NODEJS from '../images/NodeJS.png';
import PYTHON from '../images/Python.png';

const Skills = () => {
  return (
    <div id="skills" className='bg-slate-400 p-4 md:p-8'>
      <div className='font-serif flex justify-center bg-slate-400 text-2xl md:text-4xl lg:text-5xl p-2 md:p-4 font-bold'>
        MY SKILLS
      </div>
      <div className='flex justify-center bg-slate-400'>
        <div className='flex flex-wrap justify-center w-full md:w-2/3'>
          {[CPP, HTML, CSS, JS, MONGODB, EXPRESS, REACTJS, NODEJS, PYTHON].map((skill, index) => (
            <div key={index} className='flex m-2 md:m-4 lg:m-8 h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 bg-red-50 rounded-full transition duration-500 hover:scale-110'>
              <img className='rounded-full' src={skill} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
