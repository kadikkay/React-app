import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = 29199;
    }

    this.props.getStatus(userId);
  }

  state = {
    editMode: false,
    status: this.props.status,
  };

  onUpdateStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "No status"}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            className={s.status}
            value={this.state.status}
            onChange={this.onUpdateStatus}
          />
        )}
      </>
    );
  }
}

export default Status;
