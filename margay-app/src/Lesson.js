import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import * as lessons from './lessons'

function LessonBlock(lesson){
    const [post, setPost] = useState('');

    useEffect(() => {
        fetch(lessons[lesson]).then((response) => response.text()).then((text) => {
            setPost(text)
        })
    })

    if(lessons[lesson]) 
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