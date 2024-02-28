import React from 'react'

import { NavBar } from './Navbar'


export function Home(props) {
    window.scrollTo(0, 0);
    

    
    return (
    <div className='homePage split-color' >
       <NavBar handleClickHome={props.handleClickHome} handleClickJourney={props.handleClickJourney} handleClickAbout={props.handleClickAbout} handleClickResume={props.handleClickResume} handleClickProjects={props.handleClickProjects} isPink={false}/>
       
        <div className="spacer"></div>

        <div className="container" >
            <div className="row home-container">
                
                <div className='col col-picture'>
                    <div className='animate__animated animate__pulse'>
                        <div className="half-spacer"/>
                        <img className='picture drop-shadow' src="/img/general/RoshniProfile.jpg" alt="Roshni holding a cup of iced tea and sitting on a bench"/>
                    </div>
                </div>
                <div className='col col-text'>
                    
                    <h1 className='big-letters'>ROSHNI SRIKANTH</h1>
                    <br/>
                    <p className="intro">
                        Hi! I’m Roshni (she/her), welcome to my portfolio! I’m a senior at the University of Washington studying Informatics with a minor in Environmental Science and Terrestrial Resource Management (ESRM). At UW, I am part of the Interdisciplinary Honors program and a TA for INFO 200 (Intellectual Foundations of Informatics). I’m also serving as a co-president of Women in Informatics (WINFO).
                        <br/><br/>
                        I’ve always been fascinated by the intersection of people, technology, and sustainability. Throughout my childhood, I was exposed to different aspects of technology and have always wanted to create positive change in this space. I aspire to become a design engineer so that I can integrate my technical abilities with the voice of the user. 
                        <br/><br/>
                        In my spare time, I love to play with my dog, Mango, watch TV shows (Schitt's Creek and Only Murders in the Building🎭 are some of my favs), and explore new food places with my friends!
                        <br/><br/>
                        Feel free to reach out to me at <a className="pink" href = "mailto: rosheenee@gmail.com">rosheenee@gmail.com</a> if you want to chat!
                    </p>
                    <br/>
                    <button className="btn pink-button"
                        onClick={
                            () => {
                                    props.handleClick()
                            }
                    }>
                        <strong>MY UW JOURNEY</strong>
                    </button>
                    

                </div>
            </div>
        </div>
        
        <div className="half-spacer"></div>
        <div className='col col-6' >
            <div className='row white-text home-links'>
                <h4>EMAIL</h4>
                <br/>
                <a href = "mailto: rosheenee@gmail.com">rosheenee@gmail.com</a>
            </div>
            <br/><br/>
            <div className='row white-text home-links'>
                <h4>SOCIAL NETWORKS</h4>
                <br/>
                
                <div className="row row-icons">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/roshni-srikanth/"className="fa fa-linkedin"> </a>
                    </div>
                    <div className="col">
                        <a href="https://github.com/rsrika" className="fa fa-github"> </a>
                    </div>
                </div>                       
            </div>
        </div>
        <div className='half-spacer'></div>

        
        
        
        
    </div>
 );
}