import { profileAPI } from "../api/api";

let initialState = {
  postData: [],
  dataProfile: null,
  profileStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = {
        id: 3,
        cap: "New post",
        like: 0,
        descr: action.post,
      };
      return {
        ...state,
        postData: [newPost, ...state.postData],
      };
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
        profileStatus: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPost = (post) => ({ type: "ADD_POST", post });

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
    profileAPI.getStatus(userID).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
