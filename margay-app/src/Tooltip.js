import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import { Link } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class Tooltip extends React.Component {
    render(){
        return (
            <>
              <div className="App">
                <Container>
                  <Row>
                    <header className="App-header">
                      <p>Tooltips</p>
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
                        Another useful technique for adding interactivity to your 
                        visualizations is to use tooltips.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={6} lg={5} style={{textAlign: 'left'}}>
                      <p><Link to='/animation'>Previous Lesson</Link></p>
                    </Col>
                    <Col xs={6} lg={5} style={{textAlign: 'right'}}>
                      <p><Link to='/choropleth'>Next Lesson</Link></p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Tooltip;