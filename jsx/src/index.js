// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component

function getButtonText() {
    return "Click on Me!";
}

const App = () => {

    const buttonText = {text: "Click Me!"};
    
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name"type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Render Component

ReactDOM.render(
    <App />,
    document.getElementById('root')
);