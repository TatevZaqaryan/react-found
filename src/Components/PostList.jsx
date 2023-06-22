import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>"Post ne naiden"</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.map((post, index) => (
        <PostItem
          post={post}
          remove={remove}
          key={post.id}
          number={index + 1}
          title={post.title}
        />
      ))}
    </div>
  );
};

export default PostList;
