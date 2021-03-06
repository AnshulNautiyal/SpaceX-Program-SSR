import express from "express";
import fetch from "node-fetch";
import compress from "compression";
import Home from "./serverRender";

const app = express();
app.use(compress());
app.use(express.static("build"));
app.get("/", (req, res) => {
  const {
    launch_year = "",
    launch_success = "",
    land_success = "",
  } = req.query;

  let apiEndPoint =
    `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launch_year}&launch_success=${launch_success.toLowerCase()}&land_success=${land_success.toLowerCase()}`;

  // if (launch_year) {
  //   apiEndPoint = `${apiEndPoint}&launch_year=${launch_year}`;
  // }
  // if (launch_success) {
  //   apiEndPoint = `${apiEndPoint}&launch_success=${launch_success.toLowerCase()}`;
  // }
  // if (land_success) {
  //   apiEndPoint = `${apiEndPoint}&land_success=${land_success.toLowerCase()}`;
  // }
  fetch(apiEndPoint)
    .then((res) => res.json())
    .then((json) => {
      res.set("Cache-Control", "public, max-age=31557600, s-maxage=31557600");
      if (req.headers["content-type"] !== "application/json") {
        res.send(Home(json, req));
      } else {
        res.send(json);
      }
    })
    .catch(() => {
      console.log("Ops Something went wrong");
    });
});
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server  is  running on  port 3000");
});
