const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Data = require("./models/dataModel");

const app = express();

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected with DB 🟢🟢🟢");
  });

app.get("/data", paginatedData(Data), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedData(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const start = (page - 1) * limit;
    const end = page * limit;

    const results = {};

    if (page < 50) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (start > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = await model.find().limit(limit).skip(start).exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    next();
  };
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
