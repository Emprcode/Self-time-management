import express from "express";
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
const PORT = 8000;

// middleware
app.use(express());

app.use("/api/v1/task/", taskRouter);

// handeling all uncaught router request

app.use("*", (req, res, next) => {
  const error = {
    code: 404,
    message: "404 not found",
  };
  next(error);
});

// handling all global error

app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is runnning at http://localhost:${PORT}`);
});
