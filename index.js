import "dotenv/config";
import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";

import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.use("/", express.static("./client/build"));

const port = process.env.PORT || 3080;

app.listen(port, () => {
  console.log(`Server running on ${port} port.`);
});

export { app };
