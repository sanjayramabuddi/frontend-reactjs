import React from "react";
import Gif from "./components/Gif";
import SearchGif from "./components/SearchGif";

export default function App() {
  return (
    <div>
      <h1>Random Gifs</h1>
      <Gif />
      <SearchGif />
    </div>
  )
}
