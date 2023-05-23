import Post from "./Post/Post.js";
import New from "./New/New.js";
import s from "./Posts.module.css";

const Posts = (props) => {

  let postElem = props.base.postData.map((post) => (
    <Post id={post.id} cap={post.cap} like={post.like} descr={post.descr} />
  ));

  return (
    <div className={s.posts}>
      <New addPost={props.addPost} newPost={props.newPost} base={props.base} />
      {postElem}
    </div>
  );
};

export default Posts;
