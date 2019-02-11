import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>This is an example 404 page</p>
    </div>
  );
};

export default {
  component: NotFoundPage
};
