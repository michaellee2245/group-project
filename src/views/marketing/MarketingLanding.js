import React, {Component} from 'react';
import MarketTopNav from '../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../components/MarketFooter/MarketFooter';


class MarketingLanding extends Component {
    render(){
        return(
            <div>
                <MarketTopNav />
                <MarketFooter />
            </div>
        )
    }
}

export default MarketingLanding;