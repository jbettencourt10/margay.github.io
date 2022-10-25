import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';
import { Console, Hook, Decode } from 'console-feed';

import { Link } from "react-router-dom";

import Editor from '@monaco-editor/react';

import {Ghost} from 'react-kawaii';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InteractiveInterface from './interactive';

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
        <div className="App">
          <Container>
            <Row>
            <header className="App-header">
              <p>
                Welcome to the Margay Playground
              </p>
            </header>
            </Row>
            <Row>
              <Col style={{textAlign: 'left'}}>
                <p><Link to='/'>Back to Homepage</Link></p>
              </Col>
            </Row>
            <InteractiveInterface
              svg_id={'out'}
            />
          </Container>



        </div>

      </>

    );
  }

}

export default Playground;
