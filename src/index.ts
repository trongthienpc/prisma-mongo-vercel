import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { MongoDbConnection } from "./services/mongodb";

dotenv.config();

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hi world!");
});

MongoDbConnection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
