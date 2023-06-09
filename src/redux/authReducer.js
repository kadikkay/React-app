import { authAPI } from "../api/api";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
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
    default:
      return state;
  }
};

export const setAuthUserData = (dataUser) => ({
  type: "SET_AUTH_USERS_DATA",
  dataUser,
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

export default authReducer;
