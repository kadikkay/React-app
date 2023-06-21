import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  postData: [{ id: 3 ,  cap: "New post" ,  like: 0 ,  descr: "hi" }],
};


test("new post should be added", () => {
  let action = addPost("post");
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(2);
});

test("new message is true", () => {
  let action = addPost("post");
  let newState = profileReducer(state, action);
  expect(newState.postData[0].descr).toBe('post');
});

test("new post should be delete", () => {
  let action = deletePost(3);
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(0);
});


