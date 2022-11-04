import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {l1, l2, l3, l4, l5, l6, l7, l8, l9} from './lessons'

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

        if(lessonPath !== undefined) return (
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