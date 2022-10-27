import React from 'react';
import {Container} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function HighOrder() {
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Higher Order Functions'/>
                  {LessonBlock('lesson2')}
                  <NavFooter prev='/d3functions' next='/scaling'/>
                </Container>
              </div>
            </>
          );
  
}

export default HighOrder;