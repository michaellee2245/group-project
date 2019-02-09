import React, { Component } from 'react';
import MarketingLanding from './MarketingLanding';
import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn';
import MarketTopNav from '../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../components/MarketFooter/MarketFooter';
import MarketWhyUs from '../../views/marketing/MarketWhyUs/MarketWhyUs';

class Marketing extends Component {

    render(){
        return(
            <div>
                <MarketTopNav />
                <MarketWhyUs />
                {/* <MarketingLanding />
                <GetStartedBtn/> */}

            </div>
        )
    }
}
export default Marketing;