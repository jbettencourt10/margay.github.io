import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class D3Functions extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Basic D3 Functions'/>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={10} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                  </Row>
                  <NavFooter next='/highorder'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default D3Functions;