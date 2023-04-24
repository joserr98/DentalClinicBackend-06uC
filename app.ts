import config from "./core/conf.js"
import express from "express";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
const mongooseConnection = mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

mongooseConnection
  .then(() => console.log("Mongoose connection ✔"))
  .catch((err) => {
    console.log("Not working ✘", err);
  });

app.use(express.json());

app.listen(config.PORT, () =>
  console.log(`Server up on port: ${config.PORT} ✔`)
);
