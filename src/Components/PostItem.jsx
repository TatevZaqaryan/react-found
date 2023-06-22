import "./../style/App.css";
import MyButton from "./UI/button/MyButton";
const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}.{props.title}
        </strong>
        <div>{props.body}</div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => props.remove(props.post)}>Clear</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
