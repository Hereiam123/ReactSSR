import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdminsList() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Here's the admin list: This is Protected!</h3>
        <h2>Must login to see list of admins</h2>
        <ul>{this.renderAdminsList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsList)
};
