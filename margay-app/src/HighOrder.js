import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class HighOrder extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Higher Order Functions'/>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={4} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                  </Row>
                  <NavFooter prev='/d3functions' next='/scaling'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default HighOrder;