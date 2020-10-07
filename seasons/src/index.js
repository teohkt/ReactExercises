import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'

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

    componentDidUpdate() {
        console.log("my component was just updated")
    }

    render() { 
            //Conditional Rendering
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>;
            }
            if(!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat} />;
            }
            return (
                <div class="ui segment">
                    <div class="ui active dimmer">
                        <div class="ui text loader">Loading</div>
                    </div>
            </div>
            );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);