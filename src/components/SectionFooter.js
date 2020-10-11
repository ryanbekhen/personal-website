import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Content.css';

class SectionFooter extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={3}>
                        <div className={"profile-detail-item"}>
                            <span className={"profile-detail-item-title"}>Location</span>
                            <span className={"profile-detail-item-text"}>Jakarta, Indonesia</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={"profile-detail-item"}>
                            <span className={"profile-detail-item-title"}>Phone</span>
                            <span className={"profile-detail-item-text"}>082395984045</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={"profile-detail-item"}>
                            <span className={"profile-detail-item-title"}>Web</span>
                            <span className={"profile-detail-item-text"}>ryanbekhen.me</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={"profile-detail-item"}>
                            <span className={"profile-detail-item-title"}>Email</span>
                            <span className={"profile-detail-item-text"}>ryanbekhen.official@gmail.com</span>
                        </div>
                    </Col>
                </Row>

                <hr />
                <div className={"profile-title"} style={{ marginTop: "80px" }}>
                    <h3 className={"profile-title-first-text"}> Achmad Irianto Eka Putra</h3>
                    <h1 className={"profile-title-second-text"}>RYANBEKHEN</h1>
                </div>
                <div className={"social-media"}>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://github.com/ryanbekhen"}><FontAwesomeIcon icon={faGithub} /></a>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.facebook.com/iam.ryanbekhen"}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.instagram.com/ryanbekhen.official/"}><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.linkedin.com/in/ryanbekhen/"}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://t.me/ryanbekhen/"}><FontAwesomeIcon icon={faTelegram} /></a>
                    <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.youtube.com/ryanbekhen/"}><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        );
    }
}

export default SectionFooter;