import React from "react";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
  return <div>{renderRoutes(route)}</div>;
};

export default {
  component: App
};
