const { useEffect, useState } = require("react");
const axios = require("axios");

const AxiosPostbody = ({ id2 }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/ERROR_ERROR_ERROR${id2}`)
      .then((response) => {
        response.ok && setText(response.data.body);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }, [id2]);

  return <div>{text}</div>;
};

export default AxiosPostbody;
