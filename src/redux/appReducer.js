import { getAuth } from "./authReducer";

let initialState = {
  initialazed: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALAZED_SUCCESS": {
      return {
        ...state,
        initialazed: true,
      };
    }
    default:
      return state;
  }
};

export const setInitialazed = () => ({
  type: "INITIALAZED_SUCCESS",
});

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
      .then(() => {
        dispatch(setInitialazed());
      });
  };
};

export default appReducer;
