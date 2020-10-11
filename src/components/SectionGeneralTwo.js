import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class SectionGeneralTwo extends Component {
    render() {
        return (
            <Container className={""} fluid>
                <Row>
                    <Col md={4} className={"section-left-content section-left-content-2"}>
                        <h4 className={"section-left-title"}>{this.props.title}</h4>
                        <span className={"section-left-subtitle"}>{this.props.subtitle}</span>
                    </Col>
                    <Col md={8} className={"section-right-content section-right-content-2"}>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SectionGeneralTwo;