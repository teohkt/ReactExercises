import './SeasonDisplay.css';

import React from 'react';


const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Let's build a snowman :)",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month >=2 && month <= 9) {
        //javascript conditional (terniary) operator
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    console.log(props);
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];  //{text, iconName}

    return (
        <div className={` season-display ${season} `} >
            {/* template string includes the back tick ` . ${const} takes the value of the const*/}
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1 className = "text" >{text}</h1>
            <i className = {`massive ${iconName} icon icon-right`} />
        </div>
    );
};

export default SeasonDisplay;