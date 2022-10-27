import React from 'react';
import {Container} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function Scaling() {
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='D3 Scaling Functions'/>
                  {LessonBlock('lesson3')}
                  <NavFooter prev='/highorder' next='/chaining'/>
                </Container>
              </div>
            </>
          );
}

export default Scaling;