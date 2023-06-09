import Status from "./Status";
import {
  setStatus,
  updateStatus,
  getStatus,
} from "../../../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    status: state.profile.status,
    profileStatus: state.profile.profileStatus,
    store: state.profile,
  };
};

const StatusContainer = connect(mapStateToProps, {
    setStatus,
    updateStatus,
    getStatus,
})(Status);

export default StatusContainer;
