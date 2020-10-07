import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

function date() {
    return "date"
}

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className = "Author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">{date()}</span>
                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className = "Author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">{date()}</span>
                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className = "Author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">{date()}</span>
                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

