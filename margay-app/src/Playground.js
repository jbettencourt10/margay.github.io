import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';
import { Console, Hook, Decode } from 'console-feed'

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
  state={
    logs: []
  }

  componentDidMount(){
    Hook(window.console, (log) => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })

    console.log(`Console Output Will Display Here!`)
  }

  render(){
    var currVal;

    function runCode(){
      try{ let func = new Function("d3",currVal); func(d3); } catch (err){ console.log(err) }
    }

    function clearSVG(){
      d3.select('#out').selectAll('*').remove()
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
                <span style={{float: 'left'}}><h6>Write your own code.</h6></span>
                <span style={{float: 'right'}}>
                  
                  <button className='btn btn-success' onClick={runCode}>Run Code</button>
                  <button className='btn btn-danger' onClick={clearSVG}>Clear SVG</button>
                </span>
                
                <Editor
                  id='playground_editor'
                  height='50vh'
                  defaultLanguage='javascript'
                  defaultValue='let svg = d3.select("#out");'
                  onChange={handleEditorChange}
                  theme='vs-dark'
                  loading=<Ghost size={300} mood='shocked' color='#FDA7DC'/>
                />
                <div style={{ backgroundColor: '#242424', paddingTop: 10}}>
                  <Console logs={this.state.logs} variant="dark" />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <h6>Below is an svg with id="out".</h6>
                <svg id='out' height='80vh' width='100%'>
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
