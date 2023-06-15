import { authAPI } from "../api/api";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  dataLogin : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_USERS_DATA": {
      return {
        ...state,
        ...action.dataUser,
        isAuth: true,
      };
    }
    case "LOG_IN": {
      return {
        ...state,
        dataLogin: action.data,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (dataUser) => ({
  type: "SET_AUTH_USERS_DATA",
  dataUser,
});
export const logIn = (data) => ({
  type: "LOG_IN",
  data,
});

export const getAuth = (data) => {
  return (dispatch) => {
    authAPI.getAuth(data).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
      }
    });
  };
};
export const setLogin = (data) => {
  return (dispatch) => {
    authAPI.setLoginData(data).then((data) => {
      // if (data.resultCode === 1) {
        dispatch(logIn(data));
      // }
    });
  };
};

export default authReducer;
