import Dialogs from "./Dialogs";
import {
  addMessage,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.messageData.newMessageText,
    dialogData: state.dialogs.dialogData,
    state: state.dialogs.messageData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (body) => {
      dispatch(addMessage(body));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
