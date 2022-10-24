import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import { Link } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class D3Functions extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <Row>
                    <header className="App-header">
                      <p>Basic D3 Functions</p>
                    </header>
                  </Row>
                  <Row>
                    <Col xs={0} lg={3}/>
                    <Col xs={6} lg={3} style={{textAlign: 'left'}}>
                      <p><Link to='/'>Back to Homepage</Link></p>
                    </Col>
                    <Col xs={6} lg={3}/>
                    <Col xs={0} lg={3}/>
                  </Row>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={4} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={0} lg={3}/>
                    <Col xs={6} lg={3}/>
                    <Col xs={6} lg={3} style={{textAlign: 'right'}}>
                      <p><Link to='/highorder'>Next Lesson</Link></p>
                    </Col>
                    <Col xs={0} lg={3}/>
                  </Row>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default D3Functions;