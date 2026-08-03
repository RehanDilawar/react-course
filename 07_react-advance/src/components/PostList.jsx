import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setDataFetched(false);
      });
    return () => {
      console.log("Cleanup");
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
