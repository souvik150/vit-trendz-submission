const express = require("express");
const app = express();

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Mary" },
  { id: 5, name: "Peter" },
  { id: 6, name: "Alice" },
  { id: 7, name: "Sam" },
  { id: 8, name: "Max" },
  { id: 9, name: "Jane" },
  { id: 10, name: "Linda" },
];

app.get("/data", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  const start = (page - 1) * limit;
  const end = page * limit;

  const result = data.slice(start, end);

  res.json(result);
});

app.listen(8080);
