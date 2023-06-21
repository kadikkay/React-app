import React from "react";
import Post from "../Post/Post";
import s from "./New.module.css";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControl/Input";

const New = React.memo((props) => {
  console.log('render')
  let postElem = props.postData.map((post) => (
    <Post
      id={post.id}
      cap={post.cap}
      key={post.id}
      like={post.like}
      descr={post.descr}
    />
  ));
    
  let addPost = (values) => {
    props.addPost(values.post);
  };
  
  return (
    <div className={s.new}>
      <span>New post</span>
      <PostRedaxForm onSubmit={addPost} />
      {postElem}
    </div>
  );
});

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="My text..."
        component={Textarea}
        name="post"
        validate={[required, maxLengthCreator(30)]}
      />
      <button className={s.btn}>Publish</button>
    </form>
  );
};

const PostRedaxForm = reduxForm({
  form: "post",
})(PostForm);

export default New;
