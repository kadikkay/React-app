import { profileAPI } from "../api/api";

let initialState = {
  postData: [],
  dataProfile: null,
  newPostText: "",
  status: "Hi",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = {
        id: 3,
        cap: "New post",
        like: 0,
        descr: state.newPostText,
      };
      return {
        ...state,
        postData: [newPost, ...state.postData],
        newPostText: "",
      };
    }
    case "UPDATE_NEW_POST_TEXT": {
      return { ...state, newPostText: action.newText };
    }
    case "SET_PROFILE": {
      return {
        ...state,
        dataProfile: action.dataProfile,
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const updateNewPostTextCreator = (text) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text,
});

export const addPostCreator = () => ({ type: "ADD_POST" });

export const setProfile = (dataProfile) => ({
  type: "SET_PROFILE",
  dataProfile,
});

export const setStatus = (status) => ({ type: "SET_STATUS", status });

export const getProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getProfile(userID).then((data) => {
      dispatch(setProfile(data));
    });
  };
};

export const getStatus = (userID) => {
  return (dispatch) => {
    profileAPI.updateStatus(userID).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export default profileReducer;
