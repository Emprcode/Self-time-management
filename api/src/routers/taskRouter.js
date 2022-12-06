
import express from 'express'

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
      status: "OK",
      message: "Hey wassup",
    });
  });
  
 router.post("/", (req, res, next) => {
    res.json({
      status: "Success",
      message: "successfully posted",
    });  
  });
  
  router.patch("/", (req, res, next) => {
    res.json({
      status: "Success",
      message: "successfully updated",
    });
  });

  router.delete("/", (req, res, next) => {
    res.json({
      status: "Success",
      message: "successfully deleted",
    });
  });

  export default router;