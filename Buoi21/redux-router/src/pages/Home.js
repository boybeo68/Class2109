import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "../features/postSlice";

export default function Home() {
  const postList = useSelector((state) => state.posts);
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(postList);
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
          const user = usersList.find((userItem) => {
            return userItem.id === item.users;
          });
          return (
            <li key={item.id}>
              {" "}
              <span>{user.name}</span> {item.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
