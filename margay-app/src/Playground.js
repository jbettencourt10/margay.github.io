import './App.css';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar className='mx-auto' sticky='top'>
      <Nav >
          <NavLink className='nav-link page-logo active' to="/"></NavLink>
          <NavLink className='nav-link' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
          <NavLink className='nav-link active' to="/playground" ><h5 style={{marginTop: 10}}>Playground</h5></NavLink>
        </Nav>
      </Navbar>
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Margay Playground.
          </p>
        </header>
      </div>
    </>
    
  );
}

export default App;