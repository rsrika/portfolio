import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import projectsData from "./data/projects/data.json"
import projectFull from "./data/projects/projects.json"
import yearsData from "./data/journey/years.json"
import freshmanReflections from "./data/journey/reflections/freshman_reflections.json"
import sophomoreReflections from "./data/journey/reflections/sophomore_reflections.json"
import juniorReflections from "./data/journey/reflections/junior_reflections.json"
import seniorReflections from "./data/journey/reflections/senior_reflections.json"

let reflectionsData = {"freshman":freshmanReflections, "sophomore":sophomoreReflections,"junior":juniorReflections, "senior":seniorReflections}
console.log("Years data", yearsData);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App projectList={projectsData} projectListFull={projectFull} yearsData={yearsData} reflectionsData={reflectionsData} />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
