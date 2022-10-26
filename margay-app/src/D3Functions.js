import React from 'react';
import {Container} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function D3Functions(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Basic D3 Functions'/>
                  {LessonBlock('lesson1')}
                  <NavFooter next='/highorder'/>
                </Container>
              </div>
            </>
            
          );
  
}

export default D3Functions;