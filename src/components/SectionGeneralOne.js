import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class SectionGeneralOne extends Component {
    render() {
        return (
            <Container className={""} fluid>
                <Row>
                    <Col md={4} className={"section-left-content section-left-content-1"}>
                        <h4 className={"section-left-title"}>{this.props.title}</h4>
                        <span className={"section-left-subtitle"}>{this.props.subtitle}</span>
                    </Col>
                    <Col md={8} className={"section-right-content section-right-content-1"}>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SectionGeneralOne;