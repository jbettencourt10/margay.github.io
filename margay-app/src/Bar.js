import React from 'react';
import {Container} from 'react-bootstrap';
import {NavHeader, NavFooter} from './NavButtons'
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function Bar(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Bar Charts'/>
                  {LessonBlock('lesson5')}
                  <NavFooter prev='/chaining' next='/scatter'/>
                </Container>
              </div>
            </>
          );
}

export default Bar;