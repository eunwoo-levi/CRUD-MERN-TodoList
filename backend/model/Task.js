const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = Schema(
  {
    task: {
      type: String,
      required: true,
    },

    isCompleted: {
      type: Boolean,
      required: true,
    },

    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },

  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

// mongoose는 Schema를 만드는 기능도 있고 model를 만드는 기능도 있다!
