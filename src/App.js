import Navbar from './components/Navbar.js';
import Skills from './components/Skills.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import './App.css';
function App() {
  return (
    <>
    <div className='sticky  top-0 z-50'>
      <Navbar/>
    </div>
    <Header />
    <About />
    <Skills/>
    <Projects />
    <Education />
    <Footer/>
        
    </>
  )

    
  
}

export default App;
