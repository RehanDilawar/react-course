import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setDataFetched(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {dataFetched && <LoadingSpinner />}
      {!dataFetched && postList.length === 0 && <WelcomeMessage />}
      {!dataFetched &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
