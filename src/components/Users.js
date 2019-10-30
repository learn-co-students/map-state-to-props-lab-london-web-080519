import React, { Component } from 'react';
import {connect} from 'react-redux';
import { link } from 'fs';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
            {this.props.users.map((user, i) => <li key={i}>{user.username} - {user.hometown}</li>)}
        </ul>
        <p>Current No. of Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
