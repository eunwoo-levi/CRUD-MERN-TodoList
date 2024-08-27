const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const indexRouter = require("./routes/index");

app.use(bodyParser.json());

//api 안써도됌
app.use("/api", indexRouter);

const mongoURI = "mongodb://localhost:27017/crud-todolist";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connection failed", err));

app.listen(4000, () => {
  console.log("server on 4000");
});
