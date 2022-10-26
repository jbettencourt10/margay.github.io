import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

import lesson1 from './lessons/01_using_d3_methods.md';
import lesson2 from './lessons/02_using_higher_order.md';
import lesson3 from './lessons/03_creating_scales.md';
import lesson4 from './lessons/04_chaining_methods.md';
import lesson5 from './lessons/05_simple_bar_charts.md';
import lesson6 from './lessons/06_simple_scatter_plot.md';
import lesson7 from './lessons/07_animation_transitions.md';
import lesson8 from './lessons/08_tooltip.md';
import lesson9 from './lessons/09_choropleth.md';

function LessonBlock(lesson){
        const [post, setPost] = useState('');
        var lessonPath;

        switch(lesson){
            case 'lesson1': lessonPath = lesson1; break;
            case 'lesson2': lessonPath = lesson2; break;
            case 'lesson3': lessonPath = lesson3; break;
            case 'lesson4': lessonPath = lesson4; break;
            case 'lesson5': lessonPath = lesson5; break;
            case 'lesson6': lessonPath = lesson6; break;
            case 'lesson7': lessonPath = lesson7; break;
            case 'lesson8': lessonPath = lesson8; break;
            case 'lesson9': lessonPath = lesson9; break;
            default: lessonPath = undefined;
        }

        useEffect(() => {
            fetch(lessonPath).then((response) => response.text()).then((text) => {
                setPost(text)
            })
        })

        //if(this.state.text === undefined) return null;
        return (
                <>
                    <Row style={{textAlign: 'left', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
                        <Col xs={12} lg={10} className='mx-auto'>
                            <ReactMarkdown>{post}</ReactMarkdown>
                        </Col>
                    </Row>
                </>
            );

}

export default LessonBlock