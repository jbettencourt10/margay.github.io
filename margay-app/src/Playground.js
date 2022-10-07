import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import Editor from 'react-run-code';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Playground() {
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
      <Nav >
          <NavLink className='nav-link page-logo' to="/"></NavLink>
          <NavLink className='nav-link' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
          <NavLink className='nav-link active' to="/playground" ><h5 style={{marginTop: 10}}>Playground</h5></NavLink>
        </Nav>
      </Navbar>
      <div className="App">
        <Container>
          <Row>
          <header className="App-header">
            <p>
              Welcome to the Margay Playground.
            </p>
          </header>
          <h6>
            Feel free to use the code editor below to write your own code.
          </h6>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <Editor id='10' modelsInfo={[]}/>
            </Col>
            <Col>
              <p>Output will appear here.</p>
            </Col>
          </Row>
        </Container>
        

        
      </div>
      
    </>
    
  );
}

export default Playground;
