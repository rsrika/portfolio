import React from 'react'

export function NavBar(props) {

    let navImg = () => {
        if(props.isPink) {
            return (<img id="nav-img" className="pink-text" src="/img/general/roshni-pink.png" alt="roshni in signature style" onClick={() => { props.handleClickHome()}}></img>);
        }
        else {
            return (<img id="nav-img" className="white-text" src="/img/general/roshni.png" alt="roshni in signature style" onClick={() => { props.handleClickHome()}}></img>);
        }
    }

    
    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    <div className="signature">
                        {navImg()}
                    </div>
                </div>
                <div className="links">
                    <ul className='example'>
                        <li>
                            <button className="fs-5 navlink home hover1 hover1-1"
                                onClick={
                                    () => {
                                        props.handleClickHome()
                                    }
                            }>Home</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink journey hover2 hover2-1"
                                onClick={
                                    () => {
                                        props.handleClickJourney()
                                    }
                            }>My Journey</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink resume hover3 hover3-1"
                                onClick={
                                    () => {
                                        props.handleClickResume()
                                    }
                            }>Resume</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink projects hover4 hover4-1"
                                onClick={
                                    () => {
                                        props.handleClickProjects()
                                    }
                            }>Projects</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink about hover5 hover5-1"
                                onClick={
                                    () => {
                                        props.handleClickAbout()
                                    }
                            }>About</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
