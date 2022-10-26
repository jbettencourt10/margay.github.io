import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader, NavFooter } from './NavButtons';

class Chaining extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Chaining D3 Functions'/>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={10} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                  </Row>
                  <NavFooter prev='/scaling' next='/bar'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Chaining;