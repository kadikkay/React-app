import { authAPI } from "../api/api";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_USERS_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = ({ email, id, login, isAuth}) => ({
  type: "SET_AUTH_USERS_DATA",
  payload: { email, id, login, isAuth},
});

export const getAuth = (data) => {  
  return (dispatch) => {
    authAPI.getAuth(data).then((data) => {
      if (data.resultCode === 0) {
        let {email, id, login} = data.data;
        dispatch(setAuthUserData({email, id, login, isAuth: true}));
      }
    });
  };
};
export const login = (email, password, rememberMe, ) => {
  return (dispatch) => {
    authAPI
      .setLoginData(email, password, rememberMe)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(getAuth());
        }
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI
      .setLogOutData()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData({email: null, id: null, login: null, isAuth: false}));
        }
      });
  };
};

export default authReducer;
