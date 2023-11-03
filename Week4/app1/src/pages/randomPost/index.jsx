import { useState } from "react";
import PostBody from "./postBody";
import AxiosPostBody from "./axiosPostBody";

const RandomPost = () => {
  const [id, setId] = useState(1);
  const [id2, setId2] = useState(1);
  return (
    <div>
      <button onClick={() => setId(Math.floor(Math.random() * 100) + 1)}>
        Show me a random post (fetch)
      </button>
      <PostBody id={id} />
      <button onClick={() => setId2(Math.floor(Math.random() * 100) + 1)}>
        Show me a random post (axios)
      </button>
      <AxiosPostBody id2={id2} />
    </div>
  );
};
export default RandomPost;
