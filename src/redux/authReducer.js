import { stopSubmit } from "redux-form";
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

export const setAuthUserData = ({ email, id, login, isAuth }) => ({
  type: "SET_AUTH_USERS_DATA",
  payload: { email, id, login, isAuth },
});

export const getAuth = (data) => async (dispatch) => {
  const response = await authAPI.getAuth(data);
  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(setAuthUserData({ email, id, login, isAuth: true }));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.setLoginData(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuth());
  } else {
    dispatch(stopSubmit("login", { email: "Email is wrong!" }));
  }
};
export const logout = () => async (dispatch) => {
  let response = await authAPI.setLogOutData();
  if (response.data.resultCode === 0) {
    dispatch(
      setAuthUserData({ email: null, id: null, login: null, isAuth: false })
    );
  }
};
export default authReducer;
