import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import Home from "../client/server-component/Home";

export default (json, req) => {
  const homeComponent = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Route exact path="/" render={() => <Home data={json} />} />
    </StaticRouter>
  );
  return `
  <!DOCTYPE html> 
    <html  lang="en">
      <head>
          <title>Space X</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="Description" content="SpaceX Launch Programs">
          <script>window.__APP_INITIAL_STATE__ = ${JSON.stringify(
            json
          )}</script>
      </head>
      <body>
          <div id="root">${homeComponent}</div>
          <script src="client-build.js"></script>
      </body>
    </html>
    `;
};
