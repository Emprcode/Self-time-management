import express from 'express'

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
      message: "success",
    });
  });
  router.post("/", (req, res, next) => {
    res.json({
      message: "success",
    });
  });
  router.patch("/", (req, res, next) => {
    res.json({
      message: "success",
    });
  });
  router.delete("/", (req, res, next) => {
    res.json({
      message: "success",
    });
  });

  export default router;