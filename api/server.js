import express from "express";

const app = express();
const PORT = 8000;

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
    message: "successfully posted",
  });
});
app.delete("/", (req, res, next) => {
  res.json({
    status: "Success",
    message: "successfully posted",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is runnning at http://localhost:${PORT}`);
});
