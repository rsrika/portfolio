import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

export function Journey(props) {
    

    function MakeLabels(props) {
        return (
            <div className='line signpost'>
                <div className="d-inline text-center">
                    <p className="cursive" onClick={
                                    () => {
                                        props.handleClick()
                                    }}>{props.year}</p>
                </div>
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
                </div>
                <div className='row road-container'>
                    <div className='row'>
                        <div className='col text-center'>
                        </div>
                        
                        <div className='col'>

                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                            props.handleClick()
                                    }
                            }>
                                <strong className="cursive">Freshman</strong>
                            </button>
                            
                        </div>

                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                            props.handleClick()
                                    }
                            }>
                                <strong className="cursive">Sophomore</strong>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                            props.handleClick()
                                    }
                            }>
                                <strong className="cursive">Junior</strong>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                            props.handleClick()
                                    }
                            }>
                                <strong className="cursive">Senior</strong>
                            </button>
                        </div>
                        
                    </div> 
                </div>
            </div>
            <div className="spacer"></div> 
            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}

