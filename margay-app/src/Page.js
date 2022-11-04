import React from 'react';
import { Container } from 'react-bootstrap';
import { NavHeader, NavFooter } from './NavButtons';
import LessonBlock from './Lesson';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InteractiveInterface from './interactive';

const pages = {
    d3functions: {title: 'Basic D3 Methods',           lesson: 'lesson1', prev: undefined,           next: '/page/highorder',  nextText: undefined,       classes: undefined},
    highorder:   {title: 'Higher Order Functions',     lesson: 'lesson2', prev: '/page/d3functions', next: '/page/scaling',    nextText: undefined,       classes: undefined},
    scaling:     {title: 'D3 Scaling Functions',       lesson: 'lesson3', prev: '/page/highorder',   next: '/page/chaining',   nextText: undefined,       classes: undefined},
    chaining:    {title: 'Chaining D3 Methods',        lesson: 'lesson4', prev: '/page/scaling',     next: '/page/bar',        nextText: undefined,       classes: undefined},
    bar:         {title: 'Bar Charts',                 lesson: 'lesson5', prev: '/page/chaining',    next: '/page/scatter',    nextText: undefined,       classes: undefined},
    scatter:     {title: 'Scatter Plots',              lesson: 'lesson6', prev: '/page/bar',         next: '/page/animation',  nextText: undefined,       classes: undefined},
    animation:   {title: 'Animations and Transitions', lesson: 'lesson7', prev: '/page/scatter',     next: '/page/tooltip',    nextText: undefined,       classes: undefined},
    tooltip:     {title: 'Tooltips',                   lesson: 'lesson8', prev: '/page/animation',   next: '/page/choropleth', nextText: undefined,       classes: undefined},
    choropleth:  {title: 'Advanced: Choropleth Maps',  lesson: 'lesson9', prev: '/page/tooltip',     next: '/page/playground', nextText: 'To Playground', classes: 'playground'},
    playground:  {title: 'Margay Playground',          lesson: undefined, prev: '/page/choropleth',  next: undefined,          nextText: undefined,       classes: undefined},
}

function Page(p){
        return (
            <>
              <div className="App">
                <Container key={p}>
                  <NavHeader title={pages[p].title}/>
                  {LessonBlock(pages[p].lesson)}
                  <InteractiveInterface svg_id={p} />
                  <NavFooter prev={pages[p].prev} next={pages[p].next} nextText={pages[p].nextText} classes={pages[p].classes} />
                </Container>
              </div>
            </>
          );
}

export default Page;