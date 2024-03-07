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
                    
                    <h1 className='big-letters'>Hi, I'm Roshni! <span role="img" aria-label="wave">👋🏾</span></h1>
                    <br/>
                    <p className="intro">
                        
                        <span role="img" aria-label="star">✨</span> I'm about to graduate with a major in Informatics and a minor in Environmental Science and Terrestrial Resource Management from the University of Washington
                        <br/><br/>
                        <span role="img" aria-label="star">✨</span> Beyond the lines of code, I'm driven by a deep-seated belief in the power of technology to transform lives and communities. 
                        <br/><br/>
                        <span role="img" aria-label="star">✨</span> I'm driven by empathy - being kind is not just a soft skill: it is the foundation of effective communication, collaboration, and understanding
                        <br/><br/>
                        <span role="img" aria-label="star">✨</span> In my free time, you can find me hanging out with my dog Mango (he's really cute 🐕), or trying out new recipes with my friends!
                        <br/><br/>
                        <span role="img" aria-label="star">✨</span>Welcome to my portfolio! Feel free to reach out to me at <a className="pink" href = "mailto: rosheenee@gmail.com">rosheenee@gmail.com</a> if you want to chat!
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