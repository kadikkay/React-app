import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.item}>{props.cap}</div>
      <p>{props.descr}</p>
      <button className={s.btn}>&#x2764; {props.like}</button>
    </div>
  );
}

export default Post;
