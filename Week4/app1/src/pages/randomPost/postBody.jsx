const { useEffect, useState } = require("react");

const PostBody = ({ id }) => {
  const [text, setText] = useState("");

  useEffect(() => { 
    fetch(`https://dummyjson.com/posts/ERROR_ERROR_ERROR${id}`) // ERROR_ERROR_ERROR is a dummy value to make the fetch fail
      .then((res) => {
        !res.ok && alert("Something went wrong");
        return res.json();
      })
      .then((data) => setText(data.body))
  }, [id]);
  return (
    <div>
      {text}
    </div>
  );
};

export default PostBody;
