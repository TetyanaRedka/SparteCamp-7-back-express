import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

const PORT = process.env.DB_HOST || 3001;

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
