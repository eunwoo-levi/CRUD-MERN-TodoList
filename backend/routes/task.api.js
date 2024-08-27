const express = require("express");
const taskController = require("../controller/task.controller");

const router = express.Router();

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", (req, res) => {
  res.send("update task");
});

router.delete("/:id", (req, res) => {
  res.send("delete task");
});

module.exports = router;
