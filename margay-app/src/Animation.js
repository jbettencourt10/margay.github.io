import React from 'react';
import {Container} from 'react-bootstrap';
import {NavHeader, NavFooter} from './NavButtons';
import InteractiveInterface from './interactive';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import LessonBlock from './Lesson';

function Animation(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Animations and Transitions'/>
                  {LessonBlock('lesson7')}
                  <InteractiveInterface svg_id='animation'/>
                  <NavFooter prev='/scatter' next='/tooltip'/>
                </Container>
              </div>
            </>
            
          );
}

export default Animation;