import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavHeader, NavFooter} from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class Tooltip extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Tooltips'/>
                  <LessonBlock lesson='lesson8'/>
                  <NavFooter prev='/animation' next='/choropleth'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Tooltip;