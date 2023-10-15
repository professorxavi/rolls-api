import express from "express";

const rollsRouter = express.Router();

rollsRouter.get("/", (req, res, next) => {
  res.send("we hit GET /rolls endpoint");
});

export default rollsRouter;
