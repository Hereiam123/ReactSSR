import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm home Charles!!!</div>
      <button onClick={() => console.log("Hello there")}>Press Me</button>
    </div>
  );
};

export default {
  component: Home
};
