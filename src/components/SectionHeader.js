import React, { Component } from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SectionHeader extends Component {
    render() {
        return (
            <Container className={"section-header"} fluid>
                <Row>
                    <Col  style={{ height: "650px" }} md={4} className={"section-left-content-header"}>
                        <div className={"profile-image"}>
                            <img alt={"profile"} className="profile-img" src={"img/profile.jpg"} />
                        </div>
                    </Col>
                    <Col md={8} className={"section-right-content-header"}>
                        <div className={"profile-detail"}>
                            <Row>
                                <Col md={12}>
                                    <div className={"profile-title"}>
                                        <h3 className={"profile-title-first-text"}> Achmad Irianto Eka Putra</h3>
                                        <h1 className={"profile-title-second-text"}>RYANBEKHEN</h1>
                                    </div>
                                    <div className={"profile-subtitle"}>
                                        <span className={"profile-subtitle-text"}>Software Developer</span>
                                    </div>
                                    <div className={"social-media"}>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://github.com/ryanbekhen"}><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.facebook.com/iam.ryanbekhen"}><FontAwesomeIcon icon={faFacebook} /></a>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.instagram.com/ryanbekhen.official/"}><FontAwesomeIcon icon={faInstagram} /></a>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.linkedin.com/in/ryanbekhen/"}><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://t.me/ryanbekhen/"}><FontAwesomeIcon icon={faTelegram} /></a>
                                        <a className={"social-media-item"} rel="noopener noreferrer" target={"_blank"} href={"https://www.youtube.com/ryanbekhen/"}><FontAwesomeIcon icon={faYoutube} /></a>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className={"header-foot"}>
                                        <hr />
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
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SectionHeader;