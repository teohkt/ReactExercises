import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props) {
        super(props);

        //Initializing state object as null since we do not know the number
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            //Success Callback
            (position)=> {
                console.log(position)
                this.setState({ lat: position.coords.latitude });
            },
            //Failure Callback
            (err)=>{
                console.log(err)
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
 
            //Conditional Rendering
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>;
            }

            if(!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: {this.state.lat}</div>;
            }

            return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)