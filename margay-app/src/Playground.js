import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import { Hook, Decode } from 'console-feed';
import {NavHeader} from './NavButtons'

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
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
    return (
      <>
        <div className="App">
          <Container>
            <NavHeader title='Welcome to the Margay Playground'/>
            <InteractiveInterface svg_id={'out'} />
          </Container>
        </div>
      </>
    );
  }

}

export default Playground;
