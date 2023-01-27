import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';

export function IndvProjects(props) {
    let urlParams = useParams();
    let projectName = urlParams.projectname; 
    //console.log(projectName);

    let project =  props.data.filter((p) => {
        console.log(p.ProjectName);
        return p.ProjectName === projectName;
    });
    project = project[0];

    
   
    console.log(project);

    return (
        <div>
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} /> 
            <div className='half-spacer'></div>
            <div className="container px-5 ">
                <div className="context animate__animated animate__flipInX">
                    <h1 className='big-letters '>{project.ProjectName}</h1>
                    <br/><br/>
                    <h3 className="intro"><strong>Project Timeline: </strong>{project.timeline}</h3>
                    <h3 className="intro"><strong>My Role: </strong>{project.role}</h3>
                    <h3 className="intro"><strong>Summary: </strong>{project.summary}</h3>
                    <br/>
                    
                </div>
                <div className="context animate__animated animate__zoomIn">
                    <br/><br/>
                    <h4 className="intro">{project.context}</h4>
                </div>
                <div className="inspiration animate__animated animate__zoomIn">
                    <br/><br/>
                    <h4 className="intro ">{project.inspiration}</h4>
                </div>
                <div className="ideation animate__animated animate__zoomIn">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={project.img_1} alt="img1"/>
                            </div>
                            <div className="col">
                                <img src={project.img_2} alt="img2"/>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <h4 className="intro">{project.ideation}</h4>
                </div>
                <div className="implementation animate__animated animate__zoomIn">
                    <br/><br/>
                    <h4 className="intro">{project.implementation}</h4>
                </div>
                {/* <div className="links animate__animated animate__zoomIn container">
                    <br/><br/>
                    <div className='row'>
                        <button className="btn pink-button" href={project.link}>
                            <strong>OUR WEBSITE</strong>
                        </button>

                        <button className="btn pink-button" href={project.github}>
                            <strong>OUR GITHUB</strong>
                        </button>
                    </div>
                </div> */}
                <div className="reflection animate__animated animate__zoomIn">
                    <br/><br/>
                    <h4 className="intro">{project.reflection}</h4>
                </div>
               
            </div>
            <div className='spacer'/>
            
            <Footer/>
        </div>

    );
}
    