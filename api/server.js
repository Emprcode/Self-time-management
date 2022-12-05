import express from "express";
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
const PORT = 8000;

app.use("/api/v1/task", (req, res, next) => {
  res.json({
    message: "success",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is runnning at http://localhost:${PORT}`);
});
