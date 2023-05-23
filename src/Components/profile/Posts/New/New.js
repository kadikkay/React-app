import React from "react";
import s from "./New.module.css";

const New = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.newPost('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.newPost(text);
  }

  return (
    <div className={s.new}>
      <span>New post</span>
      <textarea
        placeholder="My text..."
        className={s.text}
        ref={newPostElement}
        onChange={onPostChange}
        value={props.base.newPostText}
      />
      <button onClick={addPost} className={s.btn}>
        Publish
      </button>
    </div>
  );
};

export default New;
