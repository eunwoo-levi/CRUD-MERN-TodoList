const express = require("express");
const taskController = require("../controller/task.controller");
const authController = require("../controller/auth.controller");

const router = express.Router();

router.get("/", taskController.getTask);

router.post("/", authController.authenticate, taskController.createTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
