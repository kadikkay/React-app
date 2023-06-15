import New from "../New/New";
import {
  addPost,
} from "../../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    postData: state.profile.postData,
    store: state.profile
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    },
  };
};

const NewContainer = connect(mapStateToProps, mapDispatchToProps)(New);

export default NewContainer;
