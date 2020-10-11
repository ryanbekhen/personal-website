import React, { Component } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import './Content.css';

class SectionContentSkill extends Component {
    parsingList(list) {
        let data = [];
        let left = [];
        let right = [];
        list.forEach((element, index) => {
            if (index % 2 === 0) {
                left.push(element);
            } else {
                right.push(element);
            }
        });

        for (let i = 0; i < left.length; i++) {
            data.push(
                <Row className="content-skill">
                    <Col md={5}>
                        <span className={"content-skill-percent"}>{left[i].percent}</span><span className={"content-skill-name"}>{left[i].name}</span>
                        <ProgressBar now={left[i].percent} style={{ height: "3px" }} />
                    </Col>
                    <Col md={5}>
                        <span className={"content-skill-percent"}>{right[i].percent}</span><span className={"content-skill-name"}>{right[i].name}</span>
                        <ProgressBar now={right[i].percent} style={{ height: "3px" }} />
                    </Col>
                </Row>
            )
        }

        return data;
    }

    render() {
        return (
            <div className="content-skill">{this.parsingList(this.props.data)}</div>
        );
    }
}

export default SectionContentSkill;