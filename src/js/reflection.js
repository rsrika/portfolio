import React from 'react';


import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export function Year(props) {
    
    console.log(props);
    let urlParams = useParams();
    let reflectionContent = urlParams.year; 
    
    let year =  props.data;
    year = year.filter((entry) => {
        //console.log(entry.Year);
        return entry.Year === reflectionContent;
    });
    year = year[0];

    let summerCol = year.hasSummer === "true" ? 
    <div className='col'>
        <button className="btn pink-button"
            onClick= {
                () => {
                    props.handleClickQuarter(year.Year.toLowerCase(),"summer");
                }}>
                <strong className='cursive'>summer</strong>
        </button>
    </div> : <span></span>;
    


    return (
        <div className="yearPage">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} />
            <div className='half-spacer'/>

            <div className="container">
                <h1 className='big-letters'><span className="underline_on_hover" onClick= {() => {props.handleClickYear("");}}>YEAR </span><span><FontAwesomeIcon icon={faArrowRight} /></span>&nbsp;{year.Year.toUpperCase()}</h1>
                <div className='half-spacer'></div>
            
                <div className='row d-flex flex-row quarters-row' >
                    <div className='col col-4'>
                        <img src={year.image} alt=''/>
                    </div>
                    <div className='col'>
                        <div className='half-spacer'/>
                        <div className='row'>
                            <h4>
                                <strong className="bolded-words">{year.subtitle}</strong>
                            </h4>
                             <p className='intro'>{year.intro}</p>
                        </div>
                        <div className='half-spacer'/>
                        <div className='container'>
                            <div className='row gx-0'>
                                <div className='col'>
                                    <button className="btn pink-button"
                                    onClick= {
                                        () => {
                                            props.handleClickQuarter(year.Year.toLowerCase(), "autumn");
                                        }}>
                                        <strong className='cursive'>autumn</strong>
                                    </button>
                                </div>
                                <div className='col'>
                                    <button className="btn pink-button"
                                        onClick= {
                                            () => {
                                                props.handleClickQuarter(year.Year.toLowerCase(), "winter");
                                            }}>
                                            <strong className='cursive'>winter</strong>
                                    </button>
                                </div>
                                <div className='col'>
                                    <button className="btn pink-button"
                                        onClick= {
                                            () => {
                                                props.handleClickQuarter(year.Year.toLowerCase(),"spring");
                                            }}>
                                            <strong className='cursive'>spring</strong>
                                    </button>
                                </div>
                                {summerCol}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='galleryContainer'>

            </div>
            <div className='reflectionContainer'>

            </div>


            <div className="spacer"></div>
            <div className="spacer"></div>
            <Footer handleClickHome={props.handleClickHome}/>
        </div>
    );

}