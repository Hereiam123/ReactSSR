import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsersList() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's the user list
        <ul>{this.renderUsersList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
