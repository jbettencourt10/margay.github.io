import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import pages from './pages.json';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader } from './NavButtons';

function App() {
  var {innerWidth: width, innerHeight: height} = window;
  var l = 0.25*Math.min(window.innerHeight, window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      var {innerWidth: width, innerHeight: height} = window;
      l = 0.25*Math.min(window.innerHeight, window.innerWidth);
      let logo = document.getElementById('logo')
      logo.height = l;
      logo.width = l;
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <div className="App">
        <Container>
          <NavHeader title='Welcome to Margay' home={true}/>
          <img id={'logo'} className={'margay-logo'}src={process.env.PUBLIC_URL + '/margay_logo.png'} height={l} width={l}></img>
          <Row style={{textAlign: 'left'}}>
            <Col xs={12} lg={4} className='mx-auto'>
              <ol>
                {Object.keys(pages)
                  .map((page,i) => 
                    (<li key={'li'+i}>
                      <Link className={(page === 'playground') ? 'page-link playground' : 'page-link'} to={'/page/'+page}>
                          {`${pages[page].title} (Lesson ${i})`}
                        </Link>
                    </li>))}
              </ol>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;
