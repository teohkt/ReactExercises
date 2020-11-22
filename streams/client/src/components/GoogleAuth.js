import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '52593197872-4fqab16d077cefqp9cd2eu5k2gej1pcn.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    };

    render() {
        return <div>Google Auth</div>;
    };
};

export default GoogleAuth;