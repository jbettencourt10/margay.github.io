import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class Choropleth extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <NavHeader title='Advanced: Choropleth Maps in D3'/>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={10} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                  </Row>
                  <NavFooter prev='/tooltip' next='/playground'/>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Choropleth;