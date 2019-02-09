import React, { Component } from 'react';
import MarketingLanding from './MarketingLanding';
import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn';

class Marketing extends Component {

    render(){
        return(
            <div>
                <MarketingLanding />
                <GetStartedBtn/>
            </div>
        )
    }
}
export default Marketing;