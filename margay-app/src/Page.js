import React from 'react';
import { Container } from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InteractiveInterface from './Interactive';


function Page(props){
        return (
            <>
              <div className="App">
                <Container key={props.key}>
                  <NavHeader title={props.title}/>
                  {LessonBlock(props.lesson)}
                  <InteractiveInterface svg_id={props.key} />
                  <NavFooter prev={props.prev} next={props.next} nextText={props.nextText} classes={props.classes} />
                </Container>
              </div>
            </>
          );
}

export default Page;