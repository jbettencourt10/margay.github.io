import React from 'react';
import {Container} from 'react-bootstrap';
import {NavHeader, NavFooter} from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function Tooltip(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Tooltips'/>
                  {LessonBlock('lesson8')}
                  <NavFooter prev='/animation' next='/choropleth'/>
                </Container>
              </div>
            </>
            
          );
  
}

export default Tooltip;