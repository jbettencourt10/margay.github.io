import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import { Link } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader } from './NavButtons';

var pages = [
  {title: 'Basic D3 Methods', route: '/d3functions', cls: 'page-link'},
  {title: 'Higher Order Functions', route: '/highorder', cls: 'page-link'},
  {title: 'D3 Scaling Functions', route: '/scaling', cls: 'page-link'},
  {title: 'Chaining D3 Methods', route: '/chaining', cls: 'page-link'},
  {title: 'Bar Charts', route: '/bar', cls: 'page-link'},
  {title: 'Scatter Plots', route: '/scatter', cls: 'page-link'},
  {title: 'Animations and Transitions', route: '/animation', cls: 'page-link'},
  {title: 'Tooltips', route: '/tooltip', cls: 'page-link'},
  {title: 'Advanced: Choropleth Maps', route: '/choropleth', cls: 'page-link'},
  {title: 'Margay Playground', route: '/playground', cls: 'page-link playground'}
]

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <NavHeader title='Welcome to Margay' home={true}/>
          <Row style={{textAlign: 'left'}}>
            <Col xs={12} lg={4} className='mx-auto'>
              <ol>
                {pages.map((page,i) => (<li key={'li'+i}><Link className={page.cls} to={page.route}>{page.title}</Link></li>))}
              </ol>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;
