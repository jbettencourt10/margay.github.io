import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'react-bootstrap';
import React from 'react';

import lesson1 from './lessons/01_using_d3_methods.md';
import lesson2 from './lessons/02_using_higher_order.md';
import lesson3 from './lessons/03_creating_scales.md';
import lesson4 from './lessons/04_chaining_methods.md';
import lesson5 from './lessons/05_simple_bar_charts.md';
import lesson6 from './lessons/06_simple_scatter_plot.md';
import lesson7 from './lessons/07_animation_transitions.md';
import lesson8 from './lessons/08_tooltip.md';
import lesson9 from './lessons/09_choropleth.md';

class LessonBlock extends React.Component{
    constructor(props){
        super()
        switch(props.lesson){
            case 'lesson1': this.lesson = lesson1; break;
            case 'lesson2': this.lesson = lesson2; break;
            case 'lesson3': this.lesson = lesson3; break;
            case 'lesson4': this.lesson = lesson4; break;
            case 'lesson5': this.lesson = lesson5; break;
            case 'lesson6': this.lesson = lesson6; break;
            case 'lesson7': this.lesson = lesson7; break;
            case 'lesson8': this.lesson = lesson8; break;
            case 'lesson9': this.lesson = lesson9; break;
            default: this.lesson = undefined;
        }

        this.text = undefined;
        this.loaded = false;
    }

    componentDidMount(){
        fetch(this.lesson).then((response) => response.text()).then((text) => {
            this.text = text;
            this.loaded = true
        })

        
    }

    render(){
        if (!this.loaded) {
            return null;
        }
        return (
                <>
                    <Row style={{textAlign: 'left', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
                        <Col xs={12} lg={10} className='mx-auto'>
                            <ReactMarkdown source={this.text}>This</ReactMarkdown>
                        </Col>
                    </Row>
                </>
            );
    }
}

export default LessonBlock