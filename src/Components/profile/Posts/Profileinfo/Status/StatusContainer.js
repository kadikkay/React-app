import {
  setStatus,
  updateStatus,
  getStatus,
} from "../../../../../redux/profileReducer";
import { connect } from "react-redux";
import StatusWithHooks from "./StatusWithHooks";

let mapStateToProps = (state) => {
  return {
    status: state.profile.profileStatus,
    store: state.profile,
    dataProfile: state.profile.dataProfile,
  };
};

const StatusContainer = connect(mapStateToProps, {
    setStatus,
    updateStatus,
    getStatus,
})(StatusWithHooks);

export default StatusContainer;
