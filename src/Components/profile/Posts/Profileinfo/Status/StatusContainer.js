import Status from "./Status";
import {
  setStatus,
  updateStatus,
  getStatus,
} from "../../../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profileStatus: state.profile.profileStatus,
    store: state.profile,
    dataProfile: state.profile.dataProfile,
  };
};

const StatusContainer = connect(mapStateToProps, {
    setStatus,
    updateStatus,
    getStatus,
})(Status);

export default StatusContainer;
