import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import pages from './pages.json';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader } from './NavButtons';

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <NavHeader title='Welcome to Margay' home={true}/>
          <Row style={{textAlign: 'left'}}>
            <Col xs={12} lg={4} className='mx-auto'>
              <ol>
                {Object.keys(pages).map((page,i) => (<li key={'li'+i}><Link className={(page === 'playground') ? 'page-link playground' : 'page-link'} to={'/page/'+page}>{pages[page].title}</Link></li>))}
              </ol>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;
