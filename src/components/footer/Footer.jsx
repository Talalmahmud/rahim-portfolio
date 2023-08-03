import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h2 data-aos="fade-up">Md. Rahim Uddin</h2>
            <div className="media__icons">
                <div className="footer_icon">
                    <Link>
                        <FiGithub className="icon" />
                    </Link>
                </div>
                <div className="footer__icon">
                    <Link>
                        <FiLinkedin className="icon" />
                    </Link>
                </div>
                <div className="footer__icon">
                    <Link>
                        <FiFacebook className="icon" />
                    </Link>
                </div>
            </div>
            <p>@ Copyrighter 2023. All Rights Reserved</p>
        </div>
    );
};

export default Footer;
