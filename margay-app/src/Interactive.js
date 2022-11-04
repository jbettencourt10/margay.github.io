import Editor from '@monaco-editor/react';
import {Ghost} from 'react-kawaii';
import {Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';

import { Console, Hook, Decode } from 'console-feed';
import React from 'react';

class InteractiveInterface extends React.Component {
    state; currVal; svg_id;

    constructor(props){
        super()
        this.state = {logs: []};
        this.svg_id = props.svg_id;
        this.currVal = '';
    }

    componentDidMount(){
        Hook(window.console, (log) => {
          this.setState(({logs}) => ({logs: [...logs,Decode(log)]}));
        })
  
        console.log(`Console Output Will Display Here!`)
    }

    render(){
        return (
            <>
                <Row style={{paddingBottom: 10}}>
                    <Col xs={0} lg={1}/>
                    <Col xs={12} lg={5} style={{border: '1px solid white', borderRight: '0.5px solid white', paddingTop: '10px'}}>
                        <span style={{float: 'center'}}>
                            <button className='btn btn-success' style={{marginRight: 10}} onClick={() => {
                                this.state.logs = [];
                                console.log(`Console Output Will Display Here!`)
                                try{ let func = new Function("d3",this.currVal); func(d3); } catch (err){ console.log(err) }
                            }}>Run Code</button>
                            <button className='btn btn-danger' onClick={() => d3.select('#'+ this.svg_id).selectAll('*').remove()}>Clear SVG</button>
                        </span>
                        <Editor
                            id='playground_editor'
                            height='30vh'
                            defaultLanguage='javascript'
                            defaultValue={'let svg = d3.select("#' + this.svg_id + '"); //Write code below'}
                            onChange={value => {this.currVal = value}}
                            theme='vs-dark'
                            loading=<Ghost size={200} mood='shocked' color='#FDA7DC'/>
                        />
                        <div className='console-scroll' style={{ backgroundColor: '#242424', paddingTop: 10}}>
                        <Console logs={this.state.logs} variant="dark" />
                        </div>
                    </Col>
                    <Col xs={12} lg={5} style={{border: '1px solid white', borderLeft: '0.5px solid white'}}>
                        <svg id={this.svg_id} height='40vh' width='100%'>
                        </svg>
                    </Col>
                </Row>
    
                
            </>
        )
    }
    
}

export default InteractiveInterface