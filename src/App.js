import { useMemo, useState } from "react";
import { useRef } from "react";
import Counter from "./Components/Counter";
import "./style/App.css";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/UI/PostFilter";
import MyModal from "./Components/UI/myModal/MyModal";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: " aa", body: "bb" },
    { id: 2, title: " gg", body: "aa" },
    { id: 3, title: " bb", body: "jj" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  // const [body, setBody] = useState("");
  const select = [
    { value: "title", name: "by name" },
    { value: "body", name: "by description" },
  ];

  const sortedPosts = useMemo(() => {
    console.log("hi");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const sortAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyModal>nsdjdsvn</MyModal>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortAndSearchedPosts}
        title={"List of Posts"}
      />
    </div>
  );
}

export default App;
