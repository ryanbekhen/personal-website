import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Content.css';

class SectionContentTimeline extends Component {
    parsingList(datas) {
        let data = [];
        datas.forEach(element => {
            data.push(
                <div className={"content-timeline"}>
                    <Row>
                        <Col md={5}>
                            <div className={"content-timeline-left"}>
                                <div className={"content-timeline-time"}>{element.time}</div>
                                <h4 className={"content-timeline-title"}>{element.title}</h4>
                                <h6 className={"content-timeline-subtitle"}>{element.subtitle}</h6>
                                <div className={"content-timeline-location"}>{element.location}</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <p className={"content-timeline-text"}>{element.description}</p>
                        </Col>
                    </Row>
                </div>
            );
        });
        return data;
    }

    render() {
        return (
            <div>
                {this.parsingList(this.props.data)}
            </div>
        );
    }
}

export default SectionContentTimeline;