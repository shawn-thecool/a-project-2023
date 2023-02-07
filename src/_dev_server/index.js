const express = require("express");

const server = express();
const port = 3001;

server.use(require("morgan")("dev"));
server.use(
  require("cors")({ origin: "http://localhost:3000", credentials: true })
);

server.use("/users", require("./router/users"));

server.use("ping", (req, res) => {
  return res.json({ msg: "pong" });
});

server.listen(port, () => console.log(`server is listening on port ${port}`));
