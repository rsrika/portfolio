import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

export function Journey(props) {
    

    // function MakeLabels(props) {
    //     return (
    //         <div className='line signpost'>
    //             <div className="d-inline text-center">
    //                 <p className="cursive" onClick={
    //                                 () => {
    //                                     props.handleClick()
    //                                 }}>{props.year}</p>
    //             </div>
    //         </div>
    //     );
    // }
    return(
        <div className="journeyPage">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} />
            
            <div className='half-spacer'/>
            <div className="container ">
                <h1 className='big-letters'>MY UW JOURNEY</h1>
                <div className='row img-container'>
                </div>
                <div className='row road-container'>
                    <div className='row animate__animated animate__fadeInLeft'>
                        <div className='col'>
                            <img className="journeyPic" src="./img/journey/roshniJourney.png" alt=''/>
                        </div>

                        <div className='col'>

                            <button className="btn pink-button"
                               onClick= {
                                () => {
                                    props.handleClickYear("freshman");
                                }}>
                                <strong className="cursive">freshman</strong>
                            </button>
                            
                        </div>

                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                        props.handleClickYear("sophomore");
                                    }}>
                                <strong className="cursive">sophomore</strong>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                        props.handleClickYear("junior");
                                    }}>
                                <strong className="cursive">junior</strong>
                            </button>
                        </div>
                        <div className='col text-center'>
                            <button className="btn pink-button"
                                onClick={
                                    () => {
                                        props.handleClickYear("senior");
                                    }}>
                                <strong className="cursive">senior</strong>
                            </button>
                        </div>
            
                    </div> 
                </div>
            </div>
            <div className="spacer"></div> 
            
            <div className="spacer"></div>
            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}

