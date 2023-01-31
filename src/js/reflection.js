import React from 'react';


import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';


export function Year(props) {
    var reader = require('any-text');
    console.log(props);
    let urlParams = useParams();
    let reflectionContent = urlParams.year; 
    
    let year =  props.data;
    year = year.filter((entry) => {
        //console.log(entry.Year);
        return entry.Year === reflectionContent;
    });
    year = year[0];

    function handleClickQuarter(quarterName) {

    }

    // function Reflection(quarterFileName) {

       
        let quarter = reader.getText(year.Autumn).then(function (data) {
            console.log(data);
            return data;
        });
        console.log(quarter)

        // return (
        //     <div className="quarterReflection">
        //         <div className='half-spacer'></div>
        //         <h1 className='big-letters'></h1>
        //         <div className='half-spacer'></div>
        //     </div>
        // );
    // }


    return (
        <div className="yearPage">
            <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true} />
            <div className='half-spacer'/>

            <div className="container">
                <h1 className='big-letters'>{year.Year.toUpperCase()}</h1>
                <div className='half-spacer'></div>
                <div className='row d-flex flex-row'>
                    <div className='col col-4'>
                        <img src={year.image}/>
                    </div>
                    <div className='col text-center'>
                        <div className='half-spacer'/>
                        <div className='row text-center'>
                             <p>{year.intro}</p>
                        </div>
                        <div className='half-spacer'/>
                        <div className='row'>
                            <div className='col'>
                                <button className="btn pink-button"
                                onClick= {
                                    () => {
                                        handleClickQuarter("autumn");
                                    }}>
                                    <strong>AUTUMN</strong>
                                </button>
                            </div>
                            <div className='col'>
                                <button className="btn pink-button"
                                    onClick= {
                                        () => {
                                            handleClickQuarter("winter");
                                        }}>
                                        <strong>WINTER</strong>
                                </button>
                            </div>
                            <div className='col'>
                                <button className="btn pink-button"
                                    onClick= {
                                        () => {
                                            handleClickQuarter("spring");
                                        }}>
                                        <strong>SPRING</strong>
                                </button>
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