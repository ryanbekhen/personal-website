import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Content.css';

class SectionContentList extends Component {

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

        let count = 0;
        for (let i = 0; i < left.length; i++) {
            let num = count;
            data.push(
                <Row className="content-list-item">
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span className={"content-list-item-num"}>{
                                    (num + 1).toString().length > 1 ? num + 1 : "0" + (num + 1).toString()
                                }</span>
                            </Col>
                            <Col md={11}>
                                <h5 className={"content-list-item-title"}>{left[i].title}</h5>
                                <span className={"content-list-item-desc"}>{left[i].description}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span className={"content-list-item-num"}>{
                                    (num + 2).toString().length > 1 ? num + 1 : "0" + (num + 2).toString()
                                }</span>
                            </Col>
                            <Col md={11}>
                                <h5 className={"content-list-item-title"}>{right[i].title}</h5>
                                <span className={"content-list-item-desc"}>{right[i].description}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )
            count += 2;
        }

        return data;
    }

    render() {
        return (
            <div className="content-list">{this.parsingList(this.props.data)}</div>
        );
    }
}

export default SectionContentList;