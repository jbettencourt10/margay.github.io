import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import { Link } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader } from './NavButtons';

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <NavHeader title='Welcome to Margay' home={true}/>
          <Row style={{textAlign: 'left'}}>
            <Col xs={12} lg={4} className='mx-auto'>
              <ol>
                <li><Link to='/d3functions'>Basic D3 Methods</Link></li>
                <li><Link to='/highorder'>Higher Order Functions</Link></li>
                <li><Link to='/scaling'>D3 Scaling Functions</Link></li>
                <li><Link to='/chaining'>Chaining D3 Methods</Link></li>
                <li><Link to='/bar'>Bar Charts</Link></li>
                <li><Link to='/scatter'>Scatter Plots</Link></li>
                <li><Link to='/animation'>Animations and Transitions</Link></li>
                <li><Link to='/tooltip'>Tooltips</Link></li>
                <li><Link to='/choropleth'>Advanced: Choropleth Maps in D3</Link></li>
                <li><Link to='/playground'>Margay Playground</Link></li>
              </ol>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;
