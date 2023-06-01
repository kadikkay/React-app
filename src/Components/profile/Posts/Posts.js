import NewContainer from "./New/NewContainer.js";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <NewContainer/>
    </div>
  );
};

export default Posts;
