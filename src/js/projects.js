import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

// {
//     "ProjectNumber": 3,
//     "ProjectName": "ThriftEats",
//     "ProjectRole": "Front-End Developer and Designer" ,
//     "Tags": "Figma, JavaScript, React.js",
//     "Image1": "/img/projects/ThriftEats/StartingScreen.png",
//     "ProjectOverview": "Designed and developed an interactive web app that aims to streamline the budgeting, shopping, and planning process of buying groceries. "
    
//   }

function makeTags(taglist) {
    let tags = taglist.split(",")
    return tags.map((tag) => {
        return (
            <span>
                <button className='tag my-1' disabled>
                    {tag}</button>
                <span>&nbsp;&nbsp;&nbsp;</span>
            </span>
        );
    });
}


function ProjectOverviewLeft(props) {
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    return (
        <div className="container project-div animate__animated animate__backInUp">
            <div className="half-spacer"/>
            <div className="row justify-content-center">
                <div className="col ">
                    <img src={props.project.Image1} className="img-fluid" alt="" />
                </div>
                <div className="col ">
                    <br/>
                    <div className="h2">
                        {props.project.ProjectName}
                    </div>
                    <div className="h5 grey-text  ">
                        {props.project.ProjectRole}
                    </div>
                    <br></br>
                    <div className="lead">
                        {props.project.ProjectOverview}
                    </div>

                    <br/>
                    <div> 
                        {makeTags(props.project.Tags)}
                    </div>
                    <br/>
                    <button type="button" className=" btn btn-outline-dark button larger-letters"
                        onClick= {
                            () => {
                                let to = "/project/" + props.project.ProjectName;
                                props.handleClickIndv(to);
                            }
                        }>View Project</button>
                    <br />
                </div>
            </div>
            <div className="half-spacer"/>
            <hr/>
        </div>
    );
}

export default function Projects(props) {
    let projectList =  props.data.map((project) => {
        return (
            <div key={ project.To}>
                <ProjectOverviewLeft project={project} handleClickIndv={props.handleClickIndv}/>
                <br/><br/><br/>
            </div>
        );
    });
    

    return (
        <div className="projects-page">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} /> 

            <div className="half-spacer"></div>
            
            
            <div className="projects-container px-5">
                <h1 className='big-letters px-5'>PROJECTS</h1>
                
                <div className="container">
                    <div className="row projects-flex">
                        <div className="col col-projects">
                            {projectList}
                        </div>
                        <div className="col col-description">
                            <img src="/img/general/Group 42.png" id="project-deco-img" alt="a cartoon girl sitting on top of a website screen"/>
                        </div>
                    </div>

                </div>

                
               
            </div>

            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}