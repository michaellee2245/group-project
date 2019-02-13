import React, { Component } from 'react';
import MarketingLanding from './MarketingLanding/MarketingLanding';
import MarketTopNav from '../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../components/MarketFooter/MarketFooter';

class Marketing extends Component {

    render(){
        return(
            <div>
                <MarketTopNav />
                <MarketingLanding />
                <MarketFooter />

            </div>
        )
    }
}
export default Marketing;