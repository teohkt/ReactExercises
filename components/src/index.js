import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <h4>Are you sure?</h4>
                Are you sure?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                text="haha"
                avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 3:33PM" 
                text="huh"
                avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Months ago" 
                text="lamo"
                avatar={faker.image.avatar()} 
                />  
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

