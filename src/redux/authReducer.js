let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_USERS_DATA": {
      return {
        ...state,
        ...action.dataUser,
        isAuth: true
      };
    }
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: "SEND_MESSAGE" });

export const setAuthUserData = (dataUser) => ({ type: "SET_AUTH_USERS_DATA", dataUser });

export const updateNewMessageTextCreator = (text) => ({
  type: "UPDATE_NEW_MESSAGE_BODY",
  body: text,
});

export default authReducer;
