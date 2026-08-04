import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useEffect,
  useState,
} from "react";
export const PostList = createContext({
  postList: [],
  dataFetched: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postID,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [dataFetched, setDataFetched] = useState(true);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    });
  };

  const deletePost = useCallback(
    (postID) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postID,
        },
      });
    },
    [dispatchPostList],
  );
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

  // const arr = [2, 1, 4, 7, 4, 9, 8];
  // const sortedarr = useMemo(() => arr.sort(), [arr]);
  return (
    <PostList.Provider
      value={{
        postList,
        dataFetched,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
