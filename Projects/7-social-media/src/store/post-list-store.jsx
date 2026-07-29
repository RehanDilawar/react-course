import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Multan",
    body: "I am going to Multan",
    reactions: 12,
    userId: "User-1",
    tags: ["Multan", "Trip"],
  },
  {
    id: "2",
    title: "Going to Lahore",
    body: "I am going to Lahore",
    reactions: 10,
    userId: "User-2",
    tags: ["Lahore", "Trip"],
  },
];

export default PostListProvider;
