import React from 'react';
import { useState, useEffect } from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




export function QuarterlyReflection(props) {
    const [quarterData, setQuarterData] = useState({});

    // getting the right parameters from the URl 
    let urlParams = useParams();
    let reflectionContentYear = urlParams.year; 
    let reflectionContentQuarter = urlParams.quarter;
    let quarterImageName = reflectionContentQuarter+"Image";
    
    let year =  props.data;
    year = year.filter((entry) => {
        return entry.Year === reflectionContentYear;
    });
    year = year[0];

    // fetch the data from year.reflections (i.e. one of the files from ./data/journey/reflections)

    useEffect(() => {
        fetch(year.reflections) 
            .then(response => response.json())
            .then(data => {
                if(reflectionContentQuarter === 'autumn') {
                    data = data[0];
                }
                else if(reflectionContentQuarter === 'winter'){
                    data = data[1];
                }
                else if(reflectionContentQuarter === 'spring'){
                    data = data[2];
                }
                else {
                    data = data[3];
                }
                setQuarterData(data);
                console.log("Quarterly data:" , data);
            })
            .catch(error => console.error(error));
    }, []);
    


    return (
        <div className="quarterReflectionPage">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} />
            <div className='half-spacer'/>

            <div className="container">
                <h1 className='big-letters'>
                    <span className="underline_on_hover" onClick= {() => {props.handleClickYear("");}}>YEAR </span>
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    <span className="underline_on_hover" onClick= {() => {props.handleClickYear(year.Year);}}>&nbsp;{year.Year.toUpperCase()}</span>
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    <span onClick= {() => {props.handleClickYear(year.Year);}}>&nbsp;{reflectionContentQuarter.toUpperCase()}</span>
                </h1>
            </div>
            <div className="spacer"/>
            
            <div className="container d-flex">
                <img className="img-fluid mx-auto"src={year[quarterImageName]} alt="img1"/> 
            </div>
            <div className="half-spacer"/>
            <div className="quarterReflection container d-flex">
                <div className='col'>
                    <div className='row d-flex'>
                        <strong className="cursive larger-letters mx-auto">{reflectionContentQuarter + " quarter reflection"}</strong>
                    </div>
                    <div className='half-spacer'/>
                    <div className='row'>
                        <p className="intro">
                            {quarterData.reflection}
                        </p>
                    </div>
                </div>
            </div>
            <div className="half-spacer"/>
            <div className="quarterArtifacts container d-flex">
                
            </div>
           

            <div className="spacer"></div>
            <div className="spacer"></div>
            <Footer handleClickHome={props.handleClickHome}/>
        </div>
    );

}