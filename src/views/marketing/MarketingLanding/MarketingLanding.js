import React, { Component } from 'react';
import MarketTopNav from '../../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../../components/MarketFooter/MarketFooter';
import GetStartedBtn from '../../../components/GetStartedBtn/GetStartedBtn';
import Carousel from '../../../components/Carousel/Carousel';
import LowerQuote from '../../../components/Carousel/LowerQuote';
import UpperText from '../../../components/Carousel/UpperText';

class MarketingLanding extends Component {

    state = {
        currentIndex: 0
    }
    handleChange = i => this.setState({ currentIndex: i })


    render() {
        return (
            <div className="market-land-container">

                <div className="market-top-container">
                    <UpperText currentIndex={this.state.currentIndex} />
                    <GetStartedBtn />
                </div>
                <Carousel handleChange={this.handleChange} />

                <LowerQuote currentIndex={this.state.currentIndex} />

                <div className="workflow-container">
                    <div className="workflow-text">
                        <span><h1>Workflow made simple.</h1></span>
                        <span style={{ color: "blue" }}><h1>Try it for free.</h1></span>
                    </div>
                    <GetStartedBtn />
                </div>
            </div>
        )
    }
}

export default MarketingLanding;
