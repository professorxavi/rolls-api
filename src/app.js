import "dotenv/config";
import express from "express";
import logger from "morgan";

import rollsRouter from "./routes/rolls.js";

const app = express();
const PORT = process.env.PORT;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/rolls", rollsRouter);

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`);
});
