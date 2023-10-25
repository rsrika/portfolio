
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
                    <br/>
                    <a className="btn btn-outline-danger button" href="https://drive.google.com/file/d/1sZ7NZE2H26Nuk0gTsmgb0Ur713SwLBKD/view?usp=sharing">Download Resume</a>&emsp;
                    <a className="btn btn-outline-danger button" href="https://www.linkedin.com/in/roshni-srikanth/">LinkedIn</a>
                    <br/>
                </div>
                <div className="col">
                    {/*experience, education, awards*/}
                    <div className='container'>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Relavant Experience</strong>
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
                                <li>Modified existing codebase to optimize service, resulting in a drastic 150% reduction in execution time.</li>
                                <li>Employed Rust to develop secure, high-performance code capable of handling large-scale operations.</li>
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
                                <li>Designed and implemented a Log Search tool using ELK Stack</li>
                                <li>Reduced time spent querying logs from 1 hour to 2 minutes, saving engineers 10 hours of debug time a week.</li>
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
                                <li>Created a web application as part of Team Firespot on wildfires in the US using React and Plasmic.</li>
                                <li>Utilized Firebase and Google APIs to display map data and send notifications regarding nearby wildfires.</li>
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
                                <li>Worked with Cynthia del Rosario and other diversity officers to run a virtual hackathon for middle and high-school students</li>
                                <li>Created instructional videos and mentored participants on making prototypes in Figma</li>
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
                                <br/>
                            </p>
                            <p>B.S. Informatics; Interdisciplinary Honors Program</p>
                            <ul>
                                {/* <li>September 2020 - March 2024 | Seattle, WA</li>
                                <li></li> */}
                                
                            </ul>
                            
                        </div>
                        <hr/>
                        <div className='row'>
                            <div>
                                <h4>
                                    <strong className='bolded-words'>Awards and Activities</strong>
                                </h4>
                                <ul>
                                    <li><span>Awardee, UW Husky 100 
                                        <br/>
                                        <i>2023</i></span>
                                    </li>
                                    <li><span>Co-President, Member of Women in Informatics (WINFO)
                                        <br/>
                                        <i>September 2020 - Present</i></span></li>
                                    <li><span>Winner (Most Commercially Viable), DubHacks 
                                        <br/>
                                        <i>October 2022</i></span>
                                    </li>
                                    <li><span>Member, Society of Women Engineers (SWE)
                                        <br/>
                                        <i>September 2020 - Present</i></span>
                                    </li>
                                    <li><span>Dean's List
                                        <br/>
                                        <i>Fall 2020 - Spring 2023</i></span>
                                    </li>
                                </ul>
                            </div>
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
                        <h5>
                            <strong className='pink-text'>Programming</strong>
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
                        </p>
                    </div>
                    <div className='row'>
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
                </div>
            </div>
        </div>
        <div className="spacer"></div>
        <Footer handleClickHome={props.handleClickHome}/>
    </div>
    );
}
