const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

const Task=mongoose.model("Task", taskSchema);

app.get("/", async (req, res) => {
  const tasks = await Task.find();
})

app.post("/add", async (req, res) => {
  await Task.create({
    task: req.body.task,
  });

  res.redirect("/");
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});