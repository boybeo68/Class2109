import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const postList = useSelector((state) => state.posts);
  console.log(postList);
  const [data, setdata] = useState([
    { id: "1", name: "tung" },
    { id: "2", name: "tung" },
    { id: "3", name: "tung" },
    { id: "4", name: "tung" },
  ]);
  return (
    <div className="home">
      <p>home page test {data[0].name} </p>
      <ul>
        {postList.post.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>
    </div>
  );
}
