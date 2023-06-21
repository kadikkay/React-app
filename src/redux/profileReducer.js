import { profileAPI } from "../api/api";

let initialState = {
  postData: [],
  dataProfile: null,
  status: "",
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
    case "DELETE_POST": {
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.id),
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
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPost = (post) => ({ type: "ADD_POST", post });

export const deletePost = (id) => ({ type: "DELETE_POST", id });

export const setProfile = (dataProfile) => ({
  type: "SET_PROFILE",
  dataProfile,
});

export const setStatus = (status) => ({ type: "SET_STATUS", status });

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response));

  };

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
};

export default profileReducer;
