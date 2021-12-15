import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const state = useSelector((state) => state.posts);
  console.log("bb about", state);
  return <div>About page</div>;
}
