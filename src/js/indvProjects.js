import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';

export function IndvProjects(props) {
    let urlParams = useParams();
    let projectName = urlParams.projectname; 

    let project =  props.data.filter((p) => {
        return p.ProjectName === projectName;
    });
    project = project[0];


    function goToWebsite(url) {
        window.open(url, '_blank');
    }

    return (
        <div>
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} /> 
            <div className='half-spacer'></div>
            <img className='banner' src={project.banner_image} alt="banner image"/>
            <div className='half-spacer'></div>
            <div className="container px-5 ">

                <div className="context animate__animated animate__flipInX">
                    
                    <div className="container">
                        <h1 className='big-letters '>{project.ProjectName.toUpperCase()}</h1>
                        <br/><br/>
                        <div className='row'>
                            <div className='col'>
                                <h3 className="pink-text"><strong>TYPE</strong></h3>
                                <p className="lead">{project.type}</p>
                            </div>
                            <div className='col'>
                                <h3 className="pink-text"><strong>DURATION</strong></h3>
                                <p className="lead">{project.duration}</p>
                            </div>
                            <div className='col'>
                                <h3 className="pink-text"><strong>MY ROLE</strong></h3>
                                <p className="lead">{project.role}</p>
                            </div>
                            <div className='col'>
                                <h3 className="pink-text"><strong>TOOLS</strong></h3>
                                <p className="lead">{project.tools}</p>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col'>
                                <button className="btn btn-outline-danger button" onClick={() => {goToWebsite(project.github)}}>
                                    Our GitHub
                                </button>
                                <button className="btn btn-outline-danger button mx-3" onClick={() => {goToWebsite(project.link)}}>
                                    Our Website
                                </button>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className='container'>
                    <div className="context animate__animated animate__zoomIn">
                        <br/><br/>
                        <h3><strong>Overview</strong></h3>
                        <h4 className="lead">{project.context}</h4>
                    </div>
                    <div className="inspiration animate__animated animate__zoomIn">
                        <br/><br/>
                        <h3><strong>Inspiration</strong></h3>
                        <h4 className="lead ">{project.inspiration}</h4>
                    </div>
                    <div className="inspiration animate__animated animate__zoomIn">
                        <br/><br/>
                        <h3><strong>Problem Statement</strong></h3>
                        <h4 className="lead ">{project.problem_statement}</h4>
                    </div>
                    <div className="ideation animate__animated animate__zoomIn">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={project.img_1} alt="image of a draft website with candies in grid view"/>
                                </div>
                                <div className="col">
                                    <img src={project.img_2} alt="image of a draft website with candies in list view"/>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <h3><strong>Ideation</strong></h3>
                        <h4 className="lead">{project.ideation}</h4>
                    </div>
                    <div className="implementation animate__animated animate__zoomIn">
                        <br/><br/>
                        <h3><strong>Development</strong></h3>
                        <h4 className="lead">{project.implementation}</h4>
                    </div>
                    <div className="reflection animate__animated animate__zoomIn">
                        <br/><br/>
                        <h3><strong>Reflection</strong></h3>
                        <h4 className="lead">{project.reflection}</h4>
                    </div>

                </div>
                
                
               
            </div>
            <div className='spacer'/>
            
            <Footer/>
        </div>

    );
}
    