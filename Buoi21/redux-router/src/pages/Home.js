import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "../features/postSlice";

export default function Home() {
  const postList = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(postList);
  const [data, setdata] = useState([
    { id: "1", name: "tung" },
    { id: "2", name: "tung" },
    { id: "3", name: "tung" },
    { id: "4", name: "tung" },
  ]);
  const addPost = () => {
    // console.log(title, content);
    dispatch(addNewPost({ title, content }));
    setTitle("");
    setContent("");
  };
  const getValueTitle = (e) => {
    setTitle(e.target.value);
  };
  const getValueContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="home">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            onChange={getValueTitle}
            value={title}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Content
          </label>
          <input
            value={content}
            onChange={getValueContent}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
      <button className="btn btn-success" onClick={addPost}>
        Add new post
      </button>
      <ul>
        {postList.post.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>
    </div>
  );
}
