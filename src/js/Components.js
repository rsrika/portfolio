import React from 'react'

export function Footer(props) {

    return (
        
        <footer id="sticky-footer" className="flex-shrink-0 py-3 text-white">
            <div className="container row">
                <div className="col">
                    <img id="footerIcon" src="/img/general/roshni.png" alt="Roshni in white signature style" onClick={
                                () => {
                                    props.handleClickHome()
                                }}></img>
                    &emsp;
                </div>
                <div className='col footer-links'>
                    <div className='row row-icons justify-content-end footer-alignment'>
                        <div className='col align-bottom justify-content-end'>
                            <a href="https://www.linkedin.com/in/roshni-srikanth/"className="fa fa-linkedin align-bottom"> </a>
                        </div>
                        <div className='col  align-bottom  justify-content-end'>
                            <a href="https://github.com/rsrika" className="fa fa-github align-bottom"> </a>
                        </div>     
                        <div className='col  align-bottom  justify-content-end'>
                            <a href="mailto: rsrika@uw.edu" className="fa fa-envelope align-bottom"> </a>
                        </div>                          
                    </div>
                </div>
                <small>Copyright 2023 &nbsp; &copy; &nbsp; Roshni Srikanth 2022 &hearts;</small>

            </div>
        </footer>
        
    );
}