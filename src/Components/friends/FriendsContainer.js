import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    store: state.dialogs.dialogData,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
