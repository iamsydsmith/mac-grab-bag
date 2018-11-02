import React, { Component } from "react";
import PropTypes from "prop-types";

class AddFamilyMemberForm extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleNameChange(event) {
    this.context.store.dispatch({
      type: "ADD_FAMILY_MEMBER_NAME",
      value: event.target.value
    });
  }

  handleEmailChange(event) {
    this.context.store.dispatch({
      type: "ADD_FAMILY_MEMBER_EMAIL",
      value: event.target.value
    });
  }

  handleFamilyMembersChange(event) {
    this.context.store.dispatch({
      type: "ADD_FAMILY_MEMBER_FAMILY",
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.store.dispatch({ type: "ADD_FAMILY_MEMBER" });
  }

  render() {
    const appState = this.context.store.getState();

    return (
      <div className="AddFamilyMember">
        <h1>Add Family Member</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input
              type="text"
              value={appState.familyMember.name}
              onChange={this.handleNameChange.bind(this)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={appState.familyMember.email}
              onChange={this.handleEmailChange.bind(this)}
            />
          </label>
          <label>
            Family Members:
            <input
              type="text"
              value={appState.familyMember.family}
              onChange={this.handleFamilyMembersChange.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddFamilyMemberForm.contextTypes = {
  store: PropTypes.object
};

export default AddFamilyMemberForm;
