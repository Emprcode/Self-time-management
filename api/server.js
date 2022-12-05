import express from "express";

const app = express();
const PORT = 8000;

app.use("/api/v1/tasks", (req, res, next) => {
  res.json({
    message: "sup",
  });
});

app.get("/", (req, res, next) => {
  res.json({
    message: "Hey",
  });
});
app.post("/", (req, res, next) => {
  res.json({
    message: "Hey sup",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`you server running at http://localhost:${PORT} `);
});
