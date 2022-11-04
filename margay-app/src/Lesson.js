import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import l1 from './lessons/01_using_d3_methods.md';
import l2 from './lessons/02_using_higher_order.md';
import l3 from './lessons/03_creating_scales.md';
import l4 from './lessons/04_chaining_methods.md';
import l5 from './lessons/05_simple_bar_charts.md';
import l6 from './lessons/06_simple_scatter_plot.md';
import l7 from './lessons/07_animation_transitions.md';
import l8 from './lessons/08_tooltip.md';
import l9 from './lessons/09_choropleth.md';

var lessons = { 
    lesson1: l1, lesson2: l2, lesson3: l3, 
    lesson4: l4, lesson5: l5, lesson6: l6, 
    lesson7: l7, lesson8: l8, lesson9: l9 
}

function LessonBlock(lesson){
        const [post, setPost] = useState('');
        var lessonPath = (lesson in lessons) ? lessons[lesson] : undefined;

        useEffect(() => {
            fetch(lessonPath).then((response) => response.text()).then((text) => {
                setPost(text)
            })
        })

        if(lessonPath === undefined){
            return
        }
        else return (
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