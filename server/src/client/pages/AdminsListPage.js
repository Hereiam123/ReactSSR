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
        Here's the admin list: This is Protected!
        <ul>{this.renderAdminsList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins),
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsList)
};
