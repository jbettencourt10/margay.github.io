import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import D3Functions from './D3Functions';
import HighOrder from './HighOrder';
import Scaling from './Scaling';
import Chaining from './Chaining';
import Bar from './Bar';
import Scatter from './Scatter';
import Animation from './Animation';
import Tooltip from './Tooltip';
import Choropleth from './Choropleth';
import Playground from "./Playground";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom";



const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route path='/d3functions' element={<D3Functions/>}></Route>
      <Route path='/highorder' element={<HighOrder/>}></Route>
      <Route path='/scaling' element={<Scaling/>}></Route>
      <Route path='/chaining' element={<Chaining/>}></Route>
      <Route path='/bar' element={<Bar/>}></Route>
      <Route path='/scatter' element={<Scatter/>}></Route>
      <Route path='/animation' element={<Animation/>}></Route>
      <Route path='/tooltip' element={<Tooltip/>}></Route>
      <Route path='/choropleth' element={<Choropleth/>}></Route>
      <Route path='/playground' element={<Playground/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();