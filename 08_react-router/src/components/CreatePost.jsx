import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const reactions = reactionsRef.current.value;
    const tags = tagsRef.current.value.split(" ");
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter Your User ID here"
          ref={userIdRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={6}
          className="form-control"
          id="body"
          placeholder="Write your thoughts..."
          ref={bodyRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="Number of reactions..."
          ref={reactionsRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter Your Tags here"
          ref={tagsRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
