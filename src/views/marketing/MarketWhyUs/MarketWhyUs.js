import React, { Component } from 'react';
import './market-why-us.scss';
import GetStartedBtn from '../../../components/GetStartedBtn/GetStartedBtn';
import MarketFactCard from '../../../components/MarketFactCard/MarketFactCard';
import SupportCard from '../../../components/MarketSupportCard/MarketSupportCard';

class WhyUs extends Component {
    render() {
        return (
            <div className="why-us-container">
                <div className="header-wrapper">
                    <h1 className="header-text">
                        <span className="red-text"> 350,000 </span> people, from <span className="blue-text"> 76 </span> countries, in <span className="green-text"> 50,000 </span> teams manage their work with monday.com
                    </h1>
                    <GetStartedBtn />
                    <h1>
                        And <span className="red-text">here's</span> why
                    </h1>
                    <p>
                        Our customers are cool people doing cool things, and we're inspired by the creative, innovative, and brilliant ways they use our platform.
                    </p>
                </div>
                <MarketFactCard
                    text={'of our customers say monday.com helps them stay on top of all their work'}
                    percent={'91'}
                    logo={'Discovery'}
                    quote={'It’s a great tool that allows us to organize our work visually in a way that is easy to use and understand.'}
                    name={'Katherine Simano | Associate art director'}
                    color={'green-card'}
                />
                <MarketFactCard
                    text={'of our customers say monday.com helps them collaborate better with their team'}
                    percent={'87'}
                    logo={'Wix'}
                    quote={'We wanted to create a culture of togetherness. Now I can approach any employee and talk with them about their work. It blows their minds.'}
                    name={'Avishai Abrahami | CEO & co-founder'}
                    color={'purple-card'}
                />
                <MarketFactCard
                    text={'of our customers say monday.com increased their productivity'}
                    percent={'78'}
                    logo={'wework'}
                    quote={'monday.com eliminates so many human errors from the process of planning and significantly speeds up our throughput as a department.'}
                    name={'Roee Adler | Head of digital'}
                    color={'blue-card'}
                />
                <div className="customer-section">
                    <h1>
                        You're in <span className="yellow-text">good</span> company
                    </h1>
                    <GetStartedBtn />

                </div>
                <div className="support-section">
                    <h1>
                        We're here for you <span className="blue-text">24/7</span>
                    </h1>
                    <p>
                        Our response time is under 7 minutes. Get an answer from a real-life, happy-to-help human or discover more online in whatever form suits you best.
                    </p>
                    <div className="support-card-container">
                        <SupportCard />
                        <SupportCard />
                        <SupportCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyUs;