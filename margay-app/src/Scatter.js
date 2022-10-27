import React from 'react';
import {Container} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function Scatter(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Scatter Plots'/>
                  {LessonBlock('lesson6')}
                  <NavFooter prev='/bar' next='/animation'/>
                </Container>
              </div>
            </>
          );
}

export default Scatter;