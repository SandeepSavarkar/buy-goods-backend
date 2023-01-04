import express, { application } from "express";
import cors from "cors";
import { API_MESSAGES } from "./src/constant/index.js"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res, next) => {
  return res.status(200).json({
    message: API_MESSAGES.SERVER_STARTED,
  });
});

app.listen(port, () => console.log("Server Started"));
