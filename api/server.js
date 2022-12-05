import express from "express";

const app = express();
const PORT = 8000;

app.use("/api/v1/task", (req, res, next) => {
  res.json({
    message: "success",
  });
});

app.get("/", (req, res, next) => {
  res.json({
    status: "OK",
    message: "Hey wassup",
  });
});

app.post("/", (req, res, next) => {
  res.json({
    status: "Success",
    message: "successfully posted",
  });
});

app.patch("/", (req, res, next) => {
  res.json({
    status: "Success",
    message: "successfully updated",
  });
});
app.delete("/", (req, res, next) => {
  res.json({
    status: "Success",
    message: "successfully deleted",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is runnning at http://localhost:${PORT}`);
});
