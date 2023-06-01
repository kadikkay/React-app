import React from "react";
import Post from "../Post/Post";
import s from "./New.module.css";

const New = (props) => {
  let postElem = props.postData.map((post) => (
    <Post id={post.id} cap={post.cap} key={post.id} like={post.like} descr={post.descr} />
  ));

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.new}>
      <span>New post</span>
      <textarea
        placeholder="My text..."
        className={s.text}
        onChange={onPostChange}
        value={props.newPostText}
      />
      <button onClick={addPost} className={s.btn}>
        Publish
      </button>
      {postElem}
    </div>
  );
};

export default New;
