import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import Header from "../../header/Header";
import "./portfolio.css";
import portfolioData from "./portfoliodata";
import Card from "./portfoliocard/Card";

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState(portfolioData);
    const [dataanalysis, setDataAnalysis] = useState([]);
    const [machinelearning, setMachinelearning] = useState([]);
    // const [mern, setMern] = useState([]);

    //console.log(portfolioData.filter((data)=> data.type == === "frontend"))

    const handleAll = () => {
        setPortfolios(portfolioData);
        setDataAnalysis(null);
        setMachinelearning(null);
        // setMern(null);
    };

    const handleDataAnalysis = () => {
        setPortfolios(null);
        setDataAnalysis(
            portfolioData.filter((data) => data.type === "data analysis")
        );
        setMachinelearning(null);
        // setMern(null);
    };

    const handleMachineLearning = () => {
        setPortfolios(null);
        setDataAnalysis(null);
        setMachinelearning(
            portfolioData.filter((data) => data.type === "machine learning")
        );
        // setMern(null);
    };

    // const handleMern = () => {
    //     setPortfolios(null);
    //     setDataAnalysis(null);
    //     setMachinelearning(null);
    //     // setMern(portfolioData.filter((data) => data.type === "mern"));
    // };

    return (
        <>
            <Header />
            <Container>
                <div className="portfolio" id="portfolio">
                    <div className="portfolio__heading">
                        <h2 data-aos="fade-up">Portfolio</h2>
                        <p data-aos="fade-up">Most recent project</p>
                    </div>

                    <div className="portfolio__btn" data-aos="fade-up">
                        <Button onClick={handleAll}>All</Button>
                        <Button onClick={handleDataAnalysis}>
                            Data Analysis
                        </Button>
                        <Button onClick={handleMachineLearning}>
                            Machine Learning
                        </Button>
                    </div>
                    {portfolios && <Card data={portfolios} />}
                    {dataanalysis && <Card data={dataanalysis} />}
                    {machinelearning && <Card data={machinelearning} />}
                </div>
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default Portfolio;
