import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
      <Nav >
          <NavLink className='nav-link page-logo' to="/"></NavLink>
          <NavLink className='nav-link active' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
          <NavLink className='nav-link' to="/playground" ><h5 style={{marginTop: 10}}>Playground</h5></NavLink>
        </Nav>
      </Navbar>
      <div className="App">
        <Container>
          <Row>
            <header className="App-header">
              <p>
                Welcome to Margay.
              </p>
            </header>
          </Row>
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
              </ol>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;
