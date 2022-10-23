import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import Editor from '@monaco-editor/react';

import {Ghost} from 'react-kawaii';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useMemo } from 'react';

class Playground extends React.Component{

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://d3js.org/d3.v7.min.js";
    script.async = true;
    document.head.appendChild(script);
  }

  render(){
    var currVal;
    this.componentDidMount();
    function runCode(){
      try{
        let script2 = document.createElement("script");
        script2.innerHTML = `function temp(){${currVal}}; temp()`;
        document.body.appendChild(script2);
        script2.remove()
      } catch (err){
        console.log(err)
      }
    }

    function clearSVG(){
      let script3 = document.createElement("script");
      script3.innerHTML = `function temp(){d3.select('#out').selectAll('*').remove()}; temp()`;
      document.body.appendChild(script3);
      script3.remove()
    }

    function handleEditorChange(value) { currVal = value; }

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

            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <h6>Use the code editor below to write your own code.</h6>
                <button onClick={runCode}>Run Code</button>
                <button onClick={clearSVG}>Clear SVG</button>
                <Editor
                  id='playground_editor'
                  height='90vh'
                  defaultLanguage='javascript'
                  defaultValue='let svg = d3.select("#out");'
                  onChange={handleEditorChange}
                  theme='vs-dark'
                  loading=<Ghost size={300} mood='shocked' color='#FDA7DC'/>
                />
              </Col>
              <Col xs={12} lg={6}>
                <h6>Below is an svg with id="out".</h6>
                <svg id='out' height='90vh' width='100%'>
                </svg>
              </Col>
            </Row>
          </Container>



        </div>

      </>

    );
  }

}

export default Playground;
