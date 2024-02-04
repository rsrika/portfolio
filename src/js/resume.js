
import React from 'react';
import { NavBar } from './Navbar';
import { Footer } from './Components';

export function Resume(props) {
    window.scrollTo(0, 0);

   
    
    return (
    <div className="resumePage">
        <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} /> 
        
        <div className='half-spacer'/>     
        <div className="container">
            <div className="row">
                <div className="col">
                    {/*name and description*/}
                    <h1>
                        <strong className='big-letters'>Roshni Srikanth</strong>
                    </h1>
                    <h4>
                        <strong className="bolded-words">Software Developer</strong>
                    </h4>
                    <p className="intro">
                    I am a versatile software engineer with a strong aptitude for problem solving, dedicated to crafting efficient solutions that prioritize and elevate customer experiences. My consistent ability to collaborate, adapt to dynamic environments, and communicate effectively enables me to deliver equitable solutions at scale. I am seeking opportunities in software engineering or full-stack development
                    </p>
                    <br/>
                    <a className="btn btn-outline-danger button" href="https://docs.google.com/document/d/1F5hEzHIDZqM9gjZvtC7TpbuPpFv2Lyz6bIVivmLdBVY/edit?usp=sharing">Download Resume</a>&emsp;
                    <a className="btn btn-outline-danger button" href="https://www.linkedin.com/in/roshni-srikanth/">LinkedIn</a>
                    <br/>
                </div>
                <div className="col">
                    {/*experience, education, awards*/}
                    <div className='container'>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Experience</strong>
                            </h4>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>SDE Intern - Amazon CloudFront Compute
                                </strong>
                                <br/>
                                <i className='pink-text'>June 2023 - September 2023 | Seattle, WA</i>
                            </p>
                            <ul>
                                <p>Reduced execution time of a service feature by 150%, improving efficiency and customer satisfaction</p>
                                <p>Designed, implemented, and integrated a new data structure successfully into the existing codebase using multiple languages via C-API, resulting in a more efficient system architecture</p>
                                <p>Developed secure, high-performing code capable of handling 8 billion requests per second to improve system reliability, by learning and utilizing Rust</p>
                            </ul>
                            
                        </div>
                        <div className='row'>
                            <p>
                                <strong>SDE Intern - Amazon
                                </strong>
                                <br/>
                                <i className='pink-text'>June 2022 - September 2022 | Bellevue, WA</i>
                            </p>
                            <ul>
                                <p>Reduced log query time by 96% and saved team developers 10 hours per week in debugging time, by designing and implementing a search tool with ELK Stack.</p>
                                <p>Streamlined log management & troubleshooting by creating Node.js lambda functions for real-time log querying and parsing, transforming them into a user-friendly, searchable format in under 1 second.</p>
                            </ul>
                            
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Full Stack Developer Intern - Tech for Good, Inc.
                                </strong>
                                <br/>
                                <i className='pink-text'>June 2021 - August 2021 | Remote</i>
                            </p>
                            <ul>
                                <p>Created an intuitive, user-friendly web interface to track wildfires using React, Plasmic, and Firebase, resulting in improved efficiency for first responders</p>
                                <p>Enhanced wildfire tracking by integrating real-time map data from Google APIs, resulting in an increase in precision for firefighters</p>
                                <p>Led the full-stack intern team and established transparent communication channels with design and database teams, resulting in timely project deliverables</p>
                            </ul>
                           
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Project Manager - FearLess, Tech More Innovation Challenge
                                </strong>
                                <br/>
                                <i className='pink-text'>March 2021 - November 2021 | Seattle, WA</i>
                                </p>
                            <ul>
                                <p>Managed and ran a virtual hackathon for 40 highschoolers from underrepresented schools in the Seattle area</p>
                                <p>Created instructional videos and mentored participants on making prototypes in Figma</p>
                            </ul>
                            
                        </div>
                        <hr/>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Education</strong>
                            </h4>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>University of Washington</strong>
                                <br/>
                                <i className='pink-text'>September 2020 - March 2024 | Seattle, WA</i>
                            </p>
                            {/* <p>B.S. Informatics </p> 
                            <p>Minor Environmental Science and Terrestrial Resource Management</p>
                            <p>Interdisciplinary Honors Program</p>
                            <ul>
                                {/* <p>September 2020 - March 2024 | Seattle, WA</p>
                                <p></p> 
                                
                            </ul> */}
                            
                        </div>
                    </div>

                </div>
                <div className="col">
                    {/*skills, publications*/}
                    <div className='row'>
                        <h4>
                            <strong className='bolded-words'>Skills</strong>
                        </h4>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h5>
                                <strong className='pink-text'>Technical</strong>
                            </h5>
                            <p>
                                Java
                                <br/>
                                Rust
                                <br/>
                                R
                                <br/>
                                HTML/CSS
                                <br/>
                                JavaScript
                                <br/>
                                React.js
                                <br/>
                                React.Native
                                <br/>
                                Python
                                <br/>
                                C++
                                <br/>
                                Linux
                                <br/>
                                ELK Stack
                                <br/>
                                AWS
                                <br/>
                                MVC Framework
                                <br/>
                                MongoDB
                            </p>
                        </div>
                        <div className='col'>
                            <h5>
                                <strong className='pink-text'>Workplace</strong>
                            </h5>
                            <p>
                                Problem-Solving
                                <br/>
                                Critical Thinking
                                <br/>
                                Communication
                                <br/>
                                Collaboration
                                <br/>
                                Teamwork
                                <br/>
                                Leadership
                                <br/>
                                Empathy
                                <br/>
                                Adaptability
                            </p>
                        </div>
                    </div>
                   
                    <hr/>
                    <div className='row'>
                        <h4>
                            <strong className='bolded-words'>Projects</strong>
                        </h4>
                    </div>
                    <div className='row'>
                        <p>
                            <strong>BACtracker - Informatics Program Capstone
                            </strong>
                            <br/>
                            <i>January 2023 - June 2023 | Seattle, WA</i>
                            <br/>
                        </p> 
                        <p><a href="https://bactracker-be654.web.app/">BACtracker Website</a></p>
                        <p>
                            <strong>Conscious - Cooperative Software Development
                            </strong>
                            <br/>
                            <i>September 2022 - December 2022 | Seattle, WA</i>
                            <br/>
                        </p> 
                        <p><a href="https://conscious-96dae.web.app/">Conscious Website</a></p>
                              
                                         
                        
                        <p>
                            <strong>Candy Searcher - Client-Side Development
                            </strong>
                            <br/>
                            <i>March 2021 - June 2021 | Seattle, WA</i>
                            <br/>
                        </p> 
                        <p><a href="https://github.com/info-201a-au20/final-project-movies">Candy Website GitHub</a></p>
                              
                                               
                        <br/>
                        <p>
                            <strong>The Movie Times - Technical Foundations of Informatics
                            </strong>
                            <br/>
                            <i>September 2020 - December 2020 | Seattle, WA</i>
                            <br/>
                        </p>
                        <p><a href="https://github.com/info340-wi21/project-2-rsrika">Movie Website GitHub</a></p>
                                
                       

                    </div>
                    <hr/>
                        <div className='row'>
                            <div>
                                <h4>
                                    <strong className='bolded-words'>Awards and Activities</strong>
                                </h4>
                                
                                <p><span>Awardee, UW Husky 100 
                                    <br/>
                                    <i>2023</i></span>
                                </p>
                                <p><span>Co-President, Member of Women in Informatics (WINFO)
                                    <br/>
                                    <i>September 2020 - Present</i></span></p>
                                <p><span>Winner (Most Commercially Viable), DubHacks 
                                    <br/>
                                    <i>October 2022</i></span>
                                </p>
                                <p><span>Member, Society of Women Engineers (SWE)
                                    <br/>
                                    <i>September 2020 - Present</i></span>
                                </p>
                                <p><span>Dean's List
                                    <br/>
                                    <i>Fall 2020 - Spring 2023</i></span>
                                </p>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="spacer"></div>
        <Footer handleClickHome={props.handleClickHome}/>
    </div>
    );
}
