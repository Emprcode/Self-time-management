import express from "express";
import { taskRouter123 } from "./taskRouter123.js";

const app = express();
const PORT = 9000;

app.use("/hey", taskRouter123);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
