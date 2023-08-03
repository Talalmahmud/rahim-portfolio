import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./herosection.css";
import heroImg from "../../../assets/me.jpg";

const HeroSection = () => {
    return (
        <>
            <section
                id="home"
                className="hero__section d-flex justify-contet-between align-items-center gap-4"
            >
                <div className="hero__media ">
                    <div className="header_icon">
                        <Link>
                            <FiGithub className="icon" />
                        </Link>
                    </div>
                    <div className="header__icon">
                        <Link>
                            <FiLinkedin className="icon" />
                        </Link>
                    </div>
                    <div className="header__icon">
                        <Link>
                            <FiFacebook className="icon" />
                        </Link>
                    </div>
                </div>
                <div className="hero__content" data-aos="fade-right">
                    <h2 data-aos="fade-up">Md. Rahim Uddin</h2>
                    <h6 data-aos="fade-down">________Data Analyst________</h6>
                    <p data-aos="fade-down">
                        I am Passionate to <b>Data Science</b>. Expert in SQL,
                        Power BI, and Excel. Also Have competitive
                        problem-solving abilities
                    </p>
                </div>
                <div className="hero__img" data-aos="fade-left">
                    <img src={heroImg} alt="img" />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
