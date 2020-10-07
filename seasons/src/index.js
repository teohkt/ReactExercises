import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'
import LoadingSpinner from './LoadingSpinner'

class App extends React.Component {
    constructor(props) {
        super(props);

        //Initializing state object as null since we do not know the number
        this.state = { lat: null, errorMessage: ''};
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //Success Callback
            (position) => this.setState({ lat: position.coords.latitude }),
            //Failure Callback
            (err) => {
                console.log(err)
                this.setState({ errorMessage: err.message });
            }
        );
    }

    renderContent() {
            //Conditional Rendering
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>;
            }
            if(!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat} />;
            }
            return <LoadingSpinner message="Waiting for Location Permissions"/>;
    };

    render() { 
        return (
            <div className="font red" style={{color: "red"}}>
                {this.renderContent()}
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);