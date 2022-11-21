import React, {useState, useEffect} from 'react';
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
                <img className={'margay-logo'}src={process.env.PUBLIC_URL + '/margay_logo.png'} height={100} width={100}></img>
                {LessonBlock(props.lesson)}
                <InteractiveInterface svg_id={props.key} textId={props.lesson ? +props.lesson[1]-1 : 9} />
                <NavFooter prev={props.prev} next={props.next} nextText={props.nextText} classes={props.classes} />
            </Container>
            </div>
        </>
        );
}

export default Page;