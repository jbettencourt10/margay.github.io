import React from 'react';
import ReactDOM from 'react-dom/client';
import {useParams} from 'react-router-dom';
import './index.css';
import App from './App';
import Page from "./Page";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const UsePage = () => {
  const { p } = useParams();
  return Page(p);
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route exact path='/page/:p' element={<UsePage/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();