import React from 'react';
import {Container} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



function Chaining() {
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Chaining D3 Functions'/>
                  {LessonBlock('lesson4')}
                  <NavFooter prev='/scaling' next='/bar'/>
                </Container>
              </div>
            </>
          );
}

export default Chaining;