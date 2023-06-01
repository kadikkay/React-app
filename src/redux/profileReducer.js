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
    }
    case "UPDATE_NEW_POST_TEXT": {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: "ADD_POST" });

export const updateNewPostTextCreator = (text) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text,
});

export default profileReducer;
