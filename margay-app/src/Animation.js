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

class Animation extends React.Component {
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
                      <p>Animations and Transitions</p>
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
                        Animations and Transitions are useful tools you can use when creating
                        interactive visualizations and animations with d3.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={12} lg={5}>
                      <span style={{float: 'center'}}>
                        <button className='btn btn-success' style={{marginRight: 10}} onClick={runCode}>Run Code</button>
                        <button className='btn btn-danger' onClick={clearSVG}>Clear SVG</button>
                      </span>
                      <Editor
                        id='playground_editor'
                        height='30vh'
                        defaultLanguage='javascript'
                        defaultValue='let svg = d3.select("#animation1"); //Write code below'
                        onChange={handleEditorChange}
                        theme='vs-dark'
                        loading=<Ghost size={300} mood='shocked' color='#FDA7DC'/>
                      />
                      <div style={{ backgroundColor: '#242424', paddingTop: 10}}>
                        <Console logs={this.state.logs} variant="dark" />
                      </div>
                    </Col>
                    <Col xs={12} lg={5}>
                      <svg id='animation1' height='60vh' width='100%'>
                      </svg>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={6} lg={5} style={{textAlign: 'left'}}>
                      <p><Link to='/scatter'>Previous Lesson</Link></p>
                    </Col>
                    <Col xs={6} lg={5} style={{textAlign: 'right'}}>
                      <p><Link to='/tooltip'>Next Lesson</Link></p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
            
          );
    }
  
}

export default Animation;