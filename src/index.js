import express from "express";
import stock from "./models/stock.js";
import routes from './routes/index.js';


const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
