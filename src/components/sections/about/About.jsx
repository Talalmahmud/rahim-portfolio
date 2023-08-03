import React from "react";
import "./about.css";
import aboutImg from "../../../assets/me.jpg";
import { Link } from "react-router-dom";
import cv from "../../../assets/resume.pdf";
import { Button } from "reactstrap";

const About = () => {
    return (
        <>
            <section id="about" className="about__section  d-flex-coloumn ">
                <div className="about__title text-center">
                    <h2 data-aos="fade-up">About Me</h2>
                    <p data-aos="fade-up">My Self</p>
                </div>
                <div className="about__details">
                    <div className="about__img" data-aos="fade-left">
                        <img src={aboutImg} alt="img" />
                    </div>
                    <div className="about__card"></div>
                    <div className="about__content " data-aos="fade-right">
                        <p>
                            Have competitive problem-solving abilities,
                            especially in data structure using C++ and Python.
                            Can solve medium-range SQL query problems using
                            PostgreSQL and MySQL. Most familiar with analyzing
                            data with Microsoft Excel and Power BI and Dashboard
                            Design. Have fluent knowledge of basic supervised
                            and unsupervised machine learning algorithms with
                            code implementation. Due to my bachelor's thesis,
                            familiar with image processing with CNN's transfer
                            learning model (ResNet152, DenseNet201).
                        </p>
                        <Link to={cv} target="_blank" download>
                            <Button className="btn__download">My Resume</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
