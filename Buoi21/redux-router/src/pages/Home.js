import React, { useState } from "react";

export default function Home() {
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
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
