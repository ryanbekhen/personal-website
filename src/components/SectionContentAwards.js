import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Content.css';

class SectionContentAwards extends Component {

    render() {
        return (
            <div>
                <Row>
                <Col md={4}>
                        <div style={{paddingRight: "70%"}}>
                            <hr className={"content-awards-line"} />
                        </div>
                        <div className={"content-awards-detail"} >
                            <h4>Arctic Code Vault Contributor</h4>
                            <p>Contributed code to repository in the 2020 GitHub Archive Program</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SectionContentAwards;