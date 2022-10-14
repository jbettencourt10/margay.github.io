import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import Editor from '@monaco-editor/react';

import {Ghost} from 'react-kawaii';
import {VM} from 'vm2';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Playground() {
  function handleEditorChange(value, event) {
    try{
      VM().run(value);
    } catch (err){
      console.log(err)
    }
  }

  function handleEditorValidation(markers) {
    console.log(markers)
    // model markers
    markers.forEach(marker => console.log("onValidate:", marker.message));
  }

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
              <Editor 
                height='90vh'
                defaultLanguage='javascript'
                defaultValue='//Test out your code here'
                //onChange={handleEditorChange}
                onChange={handleEditorChange}
                theme='vs-dark'
                loading=<Ghost size={300} mood='shocked' color='#FDA7DC'/>
              />
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
