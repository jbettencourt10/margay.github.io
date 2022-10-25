import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import { Link } from "react-router-dom";
import InteractiveInterface from './interactive';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Animation extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <Row>
                    <header className="App-header">
                      <p>Animations and Transitions</p>
                    </header>
                  </Row>
                  <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={6} lg={3} style={{textAlign: 'left'}}>
                      <p><Link to='/'>Back to Homepage</Link></p>
                    </Col>
                  </Row>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={10} className='mx-auto'>
                      <p>
                        Animations and Transitions are useful tools you can use when creating
                        interactive visualizations and animations with d3.
                      </p>
                    </Col>
                  </Row>
                  <InteractiveInterface 
                    svg_id='animation1'
                  />
                  <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={6} lg={5} style={{textAlign: 'left'}}>
                      <p><Link to='/scatter'>Previous Lesson</Link></p>
                    </Col>
                    <Col xs={6} lg={5} style={{textAlign: 'right'}}>
                      <p><Link to='/tooltip'>Next Lesson</Link></p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Animation;