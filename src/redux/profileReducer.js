let initialState = {
  postData: [
    { id: 1, cap: "Post one", like: 23, descr: "My first social network" },
    { id: 2, cap: "Post two", like: 4, descr: "I'm can all!!!" },
  ],
  newPostText: "",
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
    };
    case "UPDATE_NEW_POST_TEXT": {
      return { ...state, newPostText: action.newText };
    };
    case "SET_PROFILE": {
      return {
        ...state,
        dataProfile: action.dataProfile

      };
    }
    default:
      return state;
  };
};

export const addPostCreator = () => ({ type: "ADD_POST" });

export const updateNewPostTextCreator = (text) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text,
});
export const setProfile = (dataProfile) => ({
  type: "SET_PROFILE",
  dataProfile,
});

export default profileReducer;
