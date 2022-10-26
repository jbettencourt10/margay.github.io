import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import React from 'react';

class NavHeader extends React.Component{
    title; isHomepage = false;

    constructor(props){
        super()
        this.title = props.title;
        this.isHomepage = props.home;
    }

    homepageTag(){
        if(!this.isHomepage) return (
            <>
                <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={5} lg={3} style={{textAlign: 'left'}}>
                        <p><Link to='/'>Back to Homepage</Link></p>
                    </Col>
                </Row>
            </>
        )
    }

    render(){
        return (
            <>
                <Row>
                    <header className="App-header">
                        <p>{this.title}</p>
                    </header>
                </Row>
                {this.homepageTag()}
            </>
        );
    }
}

class NavFooter extends React.Component {
    prev = undefined; next;

    constructor(props){
        super()
        this.prev = props.prev;
        this.next = props.next;
    }

    generatePrev(){
        if(this.prev != undefined) return (<><p><Link to={this.prev}>Previous Lesson</Link></p></>);
    }

    generateNext(){
        if(this.prev != undefined) return (<><p><Link to={this.next}>Next Lesson</Link></p></>);
    }

    render(){
        return (
            <>
                <Row>
                    <Col xs={0} lg={1}/>
                    <Col xs={5} lg={3}>
                        {this.generatePrev()}
                    </Col>
                    <Col xs={2} lg={4} />
                    <Col xs={5} lg={3}>
                        {this.generateNext()}
                    </Col>
                    <Col xs={0} lg={1} />
                </Row>
            </>
        )
    }
    
}

export {
    NavHeader,
    NavFooter
}