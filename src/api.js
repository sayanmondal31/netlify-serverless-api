const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    text: "hello",
  });
});

app.use("/.netlify/functions/api", router);
app.use("/.netlify/functions/api", require("./router/test"));
app.use("/api", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("port running on 5000");
});

module.exports.handler = serverless(app);
