import express from "express";
import routes from './routes/index.js';
import cors from 'cors';
import { inicializeDb } from "./models/dbConfig.js";

inicializeDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
