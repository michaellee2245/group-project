import React, { Component } from 'react';
import MarketTopNav from '../../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../../components/MarketFooter/MarketFooter';
import Carousel from '../../../components/Carousel/Carousel';
import LowerQuote from '../../../components/Carousel/LowerQuote';
import UpperText from '../../../components/Carousel/UpperText';


class MarketingLanding extends Component {

    state = {
        currentIndex: 0,
    }
    handleChange = i => this.setState({ currentIndex: i })


    render() {
        return (
            <div>

                <div className="market-top-container">
                    <UpperText currentIndex={this.state.currentIndex} />
                </div>
                <Carousel handleChange={this.handleChange} />

                <LowerQuote currentIndex={this.state.currentIndex} />

            </div>
        )
    }
}

export default MarketingLanding;
