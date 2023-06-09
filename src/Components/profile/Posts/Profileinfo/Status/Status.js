import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
  state = {
    editMode: false,
  };
  updateStatus() {
    this.props.updateStatus();
  }

  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    debugger;
    return (
      <>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            className={s.status}
            value={this.props.status}
            onChange={this.onStatusChange}
          />
        )}
      </>
    );
  }
}

export default Status;