// import React from 'react';
// // import { createStream } from '../../actions';
// import SubmitForm from '../components/SubmitForm';

// // const StreamCreate = () => {
// class StreamCreate extends React.Component {

//     render() {
//         return (
//             <div className="container">
//                 <SubmitForm />
//             </div>
//         );
//     };
// };

// export default StreamCreate;

import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);