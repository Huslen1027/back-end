const express = require("express");
const { products, users } = require("./dummy.json");
const app = express();

app.get("/products", (request, response) => {
  response.type = "application/json";
  response.send({ products });
});
app.get("/users", (request, response) => {
  response.type = "application/json";
  response.send({ users });
});
app.get("/usernames", (req, res) => {
  res.type = "application/json";
  const username = [
    ...products.map((e) => e.name),
    ...users.map((e) => e.name),
  ];
  res.send({ username });
});
app.listen(3001, () => {
  console.log("Server is listening");
});
