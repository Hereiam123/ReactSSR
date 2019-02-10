import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default () => {
  const content = renderToString(
    <StaticRouter context={{}}>
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
        <head></head>
        <body>
            <div id='root'>${content}</div>
            <script src='bundle.js'></script>
        </body>
    </html>
  `;
};
