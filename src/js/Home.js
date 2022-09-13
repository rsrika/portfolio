import React from 'react'
import { NavBar } from './Navbar'
export function Home(props) {
 return (
    <div className='split-color' >
        <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} />
        <p>Hello World</p>
    </div>
 );
}