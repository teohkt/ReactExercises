import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  // Dont need this anymore since we are using fetchPostsAndUsers
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // This allows for the individual sending of userid, instead of the whole list
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  // { fetchUser }
)(UserHeader);
