import React from 'react';

import { NavBar } from './Navbar';
import { Footer } from './Components';
import {useParams} from 'react-router-dom';


export function Year(props) {
    let urlParams = useParams();
    let reflectionContent = urlParams.year; 

    let year =  props.data.filter((entry) => {
        console.log(entry.year);
        return entry.year === reflectionContent;
    });
    year = year[0];

    return (
        <div>

        </div>
    );

}