import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

export function About(props) {
    window.scrollTo(0, 0);
    return (
    <div className='about'>
        <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} />   
        <div className="half-spacer"/>
        
        <div className="container">
            <div className="row">
                <h1 className='big-letters'>ABOUT ME</h1>
                <div className='half-spacer'/>
                <div className="col">
                    <div className='spacer'/>
                    <div className='half-spacer'/>
                    <p className='intro'>
                    My name is Roshni (she/her) and I’m a third-year at the University of Washington studying informatics. I am also part of the Interdisciplinary Honors Program. 
                    <br/><br/>
                    I was drawn to the informatics program at UW because I’ve always been passionate about technology and its interaction with culture and wanted to integrate the two. 
                    <br/><br/>
                    Outside of school, I love to play with my dog, eat food, watch Netflix, read new books, and take walks with my friends!
                    <br/><br/>
                    Feel free to reach out to me at <a href="mailto: rsrika@uw.edu">rsrika@uw.edu!</a>
                    </p>
                </div>
                <div className="col">
                    <img className="picture" src="./img/general/IMG_9149.jpg" alt="Roshni wearing a pink and blue sweater"/>
                </div>
            </div>
        </div>
        <div className='spacer'/>
        <div className='spacer'/>
        <Footer handleClickHome={props.handleClickHome}/>
    </div>
    );
}
