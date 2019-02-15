import React from 'react';
import './get-started-btn.scss';



function GetStartedBtn(props){
    return(
        <div>
            <button onClick={props.changeNav} className="get-started">Get Started</button>
        </div>
    )
}

export default GetStartedBtn;