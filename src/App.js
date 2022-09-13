import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {NavBar} from './js/Navbar.js'
import {Home} from './js/Home.js'


function App() {
  let navigate = useNavigate();
  function handleClickHome() {
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".home");
    element.classList.add("active");
    navigate("/");
  }

  function handleClickJourney() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".journey");
    element.classList.add("active");
    navigate("/journey");
  }

  function handleClickResume() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".resume");
    element.classList.add("active");
    navigate("/resume");
  }

  function handleClickAbout() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".about");
    element.classList.add("active");
    navigate("/about");
  }

  function handleClickProjects() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    let element = document.querySelector(".projects");
    element.classList.add("active");
    navigate("/projects");
  }

  return (

    // rendering the app
   <div>
    <Routes>
      
      <Route path="/journey" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/resume" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/about" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />
       <Route path="/projects" element={
        <>
         {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/journey/freshman" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/journey/sophomore" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/journey/junior" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/journey/senior" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/" element={
        <>
          {/* put components here */
           
              <Home handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
              
           
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
