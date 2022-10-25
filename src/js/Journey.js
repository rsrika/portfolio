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
        <div className="journey">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} />
            <div className='spacer'/>
            <div className="container">
                <h1 className='big-letters'>MY UW JOURNEY</h1>
                <div className='half-spacer'></div>
                <div className='row'>
                    <div className='col roadmap'>
                        <div className='freshman'>
                            <MakeLabels className="freshman" year="freshman" handleClick={props.handleClickFreshman}/>
                        </div>
                        
                        <div className='sophomore'>
                            <MakeLabels className="" year="sophomore" handleClick={props.handleClickSophomore}/>
                        </div>

                        <div className='junior'>
                            <MakeLabels className="" year="junior" handleClick={props.handleClickJunior}/>
                        </div>

                        <div className='senior'>
                            <MakeLabels className="senior" year="senior" handleClick={props.handleClickSenior}/>
                        </div>
                        
                        
                        
                    </div>
                    <div className='col'>
                        <div className='half-spacer'></div>
                        <div>
                            <img src="./img/general/myJourneyVisual.png" alt="a cartoon girl looking at mountains"/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}

