import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {NavBar} from './js/Navbar.js';
import {Home} from './js/Home.js';
import {Journey} from './js/Journey.js';
import {Resume} from './js/resume.js';
import {About} from './js/About.js';
import ProjectsView from './js/projects';


function App(props) {
  let navigate = useNavigate();
  function handleClickHome() {
    console.log("handleClickHome");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".home");
    console.log("element from home" , element);
    element.classList.add("active");
    navigate("/");
  }

  function handleClickJourney() {
    console.log("handleClickJourney");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".journey");
    console.log("classes from Journey" , element.classList);
    element.classList.add("active");
    navigate("/journey");
  }

  function handleClickResume() {
    console.log("handleClickResume");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".resume");
    element.classList.add("active");
    navigate("/resume");
  }

  function handleClickAbout() {
    console.log("handleClickAbout");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".projects").classList.remove("active");
    let element = document.querySelector(".about");
    element.classList.add("active");
    navigate("/about");
  }

  function handleClickProjects() {
    console.log("handleClickProjects");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".journey").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    let element = document.querySelector(".projects");
    element.classList.add("active");
    navigate("/projects");
  }

  function handleClickFreshman() {
    navigate("/journey/freshman");
  }
  function handleClickSophomore() {
    navigate("/journey/sophomore");
  }
  function handleClickJunior() {
    navigate("/journey/junior");
  }
  function handleClickSenior() {
    navigate("/journey/senior");
  }

  function handleClickIndv(project) {
    navigate(project);
  }

 
  return (

    // rendering the app
   <div>
    <Routes>
      
      <Route path="/journey" element={
        <>
          {/* put components here */
            <Journey handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} handleClickFreshman={handleClickFreshman} handleClickSophomore={handleClickSophomore} handleClickJunior={handleClickJunior} handleClickSenior={handleClickSenior} />
          }
        </>
      } />

      <Route path="/resume" element={
        <>
          {/* put components here */
            <Resume handleClick={handleClickJourney} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />

      <Route path="/about" element={
        <>
          {/* put components here */
            <About handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
          }
        </>
      } />
       <Route path="/projects" element={
        <>
         {/* put components here */
            <ProjectsView data={props.projectList} handleClickIndv={handleClickIndv} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
         }
        </>
      } />

      <Route path="/journey/freshman" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects}/>
          }
        </>
      } />

      <Route path="/journey/sophomore" element={
        <>
          {/* put components here */
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects}  />
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
            <NavBar handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects}  />
          }
        </>
      } />

      <Route path="/" element={
        <>
          {/* put components here */
           
              <Home handleClick={handleClickJourney} handleClickHome={handleClickHome} handleClickJourney={handleClickJourney} handleClickAbout={handleClickAbout} handleClickResume={handleClickResume} handleClickProjects={handleClickProjects} />
              
           
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
