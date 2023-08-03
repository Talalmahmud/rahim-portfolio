import React from "react";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import "./services.css";

const Services = () => {
    return (
        <>
            <section id="services" className="services__section">
                <div className="services__title text-center">
                    <h2 data-aos="fade-up">Services</h2>
                    <p data-aos="fade-up">what i offer</p>
                </div>
                <div className="services__content">
                    <div className="services__frontend" data-aos="fade-right">
                        <div className="details d-flex flex-column gap-3">
                            <BsLayoutTextWindowReverse className="user__icons" />
                            <h5>
                                Machine
                                <br /> Learning
                            </h5>
                            <p>I can use machine learning model to predict.</p>
                        </div>
                    </div>

                    <div className="services__backend" data-aos="fade-left">
                        <div className="details d-flex flex-column gap-3">
                            <BsLayoutTextWindowReverse className="user__icons" />
                            <h5>
                                Data
                                <br /> Analysis
                            </h5>
                            <p>I can anlysis industrial data</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
