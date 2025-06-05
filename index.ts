import express, { Request, Response } from "express";
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
import { client } from "./database";
import * as fs from "fs";
import { CarFileRepository } from "./CarFileRepository";

client
  .connect()
  .then(() => console.log("✅ Connected to Postgres"))
  .catch((err: Error) => console.error("❌ Connection failed", err))
  .finally(() => client.end());

app.get("/", (req, res) => {
  res.send("hellooooo");
});

app.get("/cars", async (req, res) => {
  const cars = await fs.promises.readFile("./cars.json", "utf8");

  try {
    res.send(cars).json();
  } catch (err) {
    console.log(err);
  }

  res.send(cars).json();
});

app.get("/allcars", async (req, res) => {
  const cars = new CarFileRepository();

  const allCars = await cars.getAll();

  try{
    res.send(allCars).json()
  } catch(err) {
    console.log(err)
  }
});

app.listen(3001, () => {
  console.log(`Server running at http://localhost:3001`);
});
