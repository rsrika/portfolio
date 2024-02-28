import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';

export function About(props) {
    window.scrollTo(0, 0);
   

    return (
    <div className='aboutPage'>
        <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={true}/>
        
        <div className="half-spacer"/>
        
        <div className="container">
            <div className="row">
                <h1 className='big-letters'>ABOUT ME</h1>
                <div className='half-spacer'/>
                <div className="col">
                    
                   
                    <p className='intro'>
                    My name is Roshni (she/her) and I’m a fourth-year student at the University of Washington studying Informatics. I am a TA for INFO 200 (Intellectual Foundations of Informatics), and one of the two Co-Presidents of Women in Informatics (WINFO). I am also part of the Interdisciplinary Honors Program!
                    <br/><br/>
                    I was drawn to the Informatics program at UW because I’ve always been passionate about technology and its interaction with culture and wanted to integrate the two. 
                    <br/><br/>
                    I’m a software developer, interested in all types of development. However, my passion lies in front-end and full-stack development, where I can build efficient applications that are usable and well designed to create amazing experiences for all people. 
                    <br/><br/>
                    I just finished a software development internship at Amazon, where I learned to use Rust. I designed a service structure to use in a production-level environment around the world. As I finish my college career, I plan on furthering my skills in React and server-side development, so I can be a better engineer.     
                    <br/><br/>
                    Outside of school, I love to play with my dog, eat food, watch Netflix, read new books, and take walks with my friends! (I also really love sharks 🦈)
                    <br/><br/>
                    Feel free to reach out to me at <a href="mailto: rosheenee@gmail.com">rosheenee@gmail.com!</a>
                    </p>
                </div>
                <div className="col">
                    <img className="picture drop-shadow" src="/img/general/IMG_GASWORKS.jpg" alt="Roshni wearing a brown courderoy jacket while leaning against a fence at gasworks park"/>
                </div>
            </div>
        </div>
        <div className='spacer'/>
        <div className='spacer'/>
        <Footer handleClickHome={props.handleClickHome}/>
    </div>
    );
}
