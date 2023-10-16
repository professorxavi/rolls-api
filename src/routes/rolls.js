import express from "express";
import getEncounters from "../encounters/getEncounters.js";

const rollsRouter = express.Router();

rollsRouter.get("/", (req, res, next) => {
  const encounter = getEncounters(req.body.number);
  res.send(encounter);
});

export default rollsRouter;
