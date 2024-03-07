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
                <div>
                    <br/>
                    <h3 className="cursive larger-letters mx-auto">Learning Statement</h3>
                    <p>I stepped off the bus, feeling nervous, excited, and…lost. My sister and I stood in the middle of Red Square, wondering where Smith Hall was. We were here to attend the UW Robinson summer program, taking a class about microbiology. Despite having lived near Seattle for three years, this was our first time visiting the campus. We pulled out some directions, and finally found our building. I looked at the sunny quad filled with students and families. I didn’t know it then, but this campus would ultimately become my home.</p>
                   
                    <p>After high school, I knew I wanted to be a Husky. I ended up joining the Informatics program at UW as a freshman direct admit, while also pursuing my passion in sustainability by minoring in Environmental Science and Terrestrial Resource Management (ESRM). As soon as I started taking classes at the iSchool, I found myself fascinated with the concepts I learned. One of the most influential classes I took within the iSchool was INFO 200. I left the class looking at everyday things from a new perspective (antelopes are information too). Outside of classes, I found a community in WINFO (Women in Informatics). Being a part of WINFO is where I found my informatics friends. We have stayed close these past four years, and I know I made memories with them that will last me a lifetime. </p>
                   
                    <p>
                    Despite the raging global pandemic and the start of my UW experience being Zoom classes, I felt like I always knew who I was and what I wanted. I skated through life with almost nothing bothering me. As cliché as this might sound, my life transformed when I left home for the first time. Living in the dorms without the support system of home wasn’t difficult because I still had a college dining plan, I went home on weekends, and relied on my parents for financial support.
                    </p>
                    
                    <p>
                    So where did the challenges come from? It’s me – hi<span role="img" aria-label="Smile">😊</span>
                    </p>
                    
                    <p>
                    Prior to the beginning of my sophomore year, I was beginning to come to terms with my queer identity, and I also started my relationship with my partner. Growing up in a traditional South Indian household, it was almost unheard of for anyone not to follow the typical pipeline of growing up, getting a job in tech, medicine, or law (I’m in tech), getting married, and having children to continue the cycle. The realization that I do not fit this mold came in waves, and was beyond terrifying. I went from someone who was extremely confident to someone who was constantly second-guessing themselves. Every weekend I spent back home felt like I was hiding a life-altering secret, and I felt myself monitoring my words and my actions to avoid acting “suspicious.”
                    </p>
                    <p>Despite the difficulty of that year, as well as the following year, I felt myself growing. I spent my time reading, both about how to handle mental health crises, as well as more about myself and my culture. I've been learning about how to accept myself for who I am, and that it is ok for me to break the norms. I have also learned how to approach the situations I encounter in life with empathy first. The compassion I received from my partner, professors, and peers got me through the hardships of the past few years, and I now strive to be that friendly face to other people in my life.</p>

                    <br/>
                    <h3 className='cursive larger-letters mx-auto'>Instructions:</h3>
                    <p>This website is a journey through my four years of college, divided into sections representing each academic year. Simply click on the section corresponding to the academic year you'd like to explore. Within each year, you'll find three quarters listed chronologically. You can then click on the quarter you're interested in to read about my life! </p>
                </div>
            </div>
            
            <div className="spacer"></div> 
            
            <div className="spacer"></div>
            <Footer handleClickHome={props.handleClickHome}/>
        </div>

    );
}

