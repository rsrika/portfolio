import React from 'react'

import { NavBar } from './Navbar'


export function Home(props) {
    window.scrollTo(0, 0);
    

    
    return (
    <div className='homePage split-color' >
        <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={false}/>
        
        <div className="spacer"></div>

        <div className="container" >
            <div className="row home-container">
                
                <div className='col col-picture'>
                    <div>
                        <img className='picture' src="./img/general/RoshniProfile.jpg" alt="Roshni holding a cup of iced tea and sitting on a bench"/>
                    </div>
                </div>
                <div className='col col-text'>
                    <div className="spacer"></div>
                
                    <h1 className='big-letters'>ROSHNI SRIKANTH</h1>
                    <br/>
                    <h4 className="intro">Hi! I’m Roshni Srikanth, a junior at the University of Washington majoring in Informatics. I'm also a part of the Interdisciplinary Honors Program. Welcome to my portfolio!</h4>
                    <br/>
                    <button className="btn pink-button"
                        onClick={
                            () => {
                                    props.handleClick()
                            }
                    }>
                        <strong>MY UW JOURNEY</strong>
                    </button>
                    

                </div>
            </div>
        </div>
        
        <div className="half-spacer"></div>
        <div className='col col-6' >
            <div className='row white-text home-links'>
                <h4>EMAIL</h4>
                <br/>
                <a href = "mailto: rsrika@uw.edu">rsrika@uw.edu</a>
            </div>
            <br/><br/>
            <div className='row white-text home-links'>
                <h4>SOCIAL NETWORKS</h4>
                <br/>
                
                <div className="row row-icons">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/roshni-srikanth/"className="fa fa-linkedin"> </a>
                    </div>
                    <div className="col">
                        <a href="https://github.com/rsrika" className="fa fa-github"> </a>
                    </div>
                </div>                       
            </div>
        </div>
        <div className='half-spacer'></div>

        
        
        
        
    </div>
 );
}