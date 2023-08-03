import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import "./skills.css";

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills__section  d-flex-coloumn">
                <div className="skills__title text-center">
                    <h2 data-aos="fade-up">Skills</h2>
                    <p data-aos="fade-up">My skills level</p>
                </div>
                <div className="skills__content">
                    <div className="skills__frontend" data-aos="fade-right">
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Power BI</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5> Excel</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>MySQL</h5>
                                </div>

                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>PostgreSQL</h5>
                                </div>

                                <p>Intermediate</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Python</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>C++</h5>
                                </div>
                                <p>Basic</p>
                            </Col>
                        </Row>
                    </div>

                    <div className="skills__backend" data-aos="fade-left">
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Scikit</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>TensorFlow</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>MongoDB</h5>
                                </div>

                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Sql</h5>
                                </div>
                                <p>Advanced</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Deep Learning</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                            <Col>
                                <div className="d-flex skills-hover align-items-center gap-2">
                                    <BsCheckCircleFill />
                                    <h5>Machine Learning</h5>
                                </div>
                                <p>Intermediate</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
