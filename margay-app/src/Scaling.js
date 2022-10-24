import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Scaling extends React.Component {
    render(){
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
                      <p>D3 Scaling Functions</p>
                    </header>
                  </Row>
                  <Row style={{textAlign: 'left'}}>
                    <Col xs={12} lg={4} className='mx-auto'>
                      <p>
                        Add lesson here.
                      </p>
                    </Col>
                    
                  </Row>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Scaling;