import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

export function Journey(props) {
    

    function MakeLabels(props) {
        return (
            <div className='line'>
                <div className="d-inline align">
                    <p className="cursive" onClick={
                                    () => {
                                        props.handleClick()
                                    }}>{props.year}</p>
                </div>
                &nbsp; &nbsp; &nbsp;
                <div className='circle' onClick={
                                    () => {
                                        props.handleClick()
                                    }}></div>
            </div>
        );
    }
    return(
        <div className="journeyPage">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} />
            
            <div className='half-spacer'/>
            <div className="container">
                <h1 className='big-letters'>MY UW JOURNEY</h1>
                <div className='half-spacer'></div>
                <div className='row img-container'>
                    <img src="./img/general/Mountains background.png"/>
                </div>
            </div>
            <div className="spacer"></div> 
            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}

