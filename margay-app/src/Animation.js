import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import {NavHeader, NavFooter} from './NavButtons';
import InteractiveInterface from './interactive';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class Animation extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Animations and Transitions'/>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={10} className='mx-auto'>
                      <p>
                        Animations and Transitions are useful tools you can use when creating
                        interactive visualizations and animations with d3.
                      </p>
                    </Col>
                  </Row>
                  <InteractiveInterface svg_id='animation1'/>
                  <NavFooter prev='/scatter' next='/tooltip'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Animation;