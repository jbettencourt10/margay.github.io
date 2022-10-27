import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function Choropleth(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Advanced: Choropleth Maps'/>
                  {LessonBlock('lesson9')}
                  <NavFooter prev='/tooltip' next='/playground' nextText='To Playground' classes='playground' />
                </Container>
              </div>
            </>
          );
}

export default Choropleth;