import express from "express";
import cors from "cors";
import { drinks, categories } from "./data/drinks.js";

const app = express();
app.use(cors());

app.get('/drinks', (req, res)=> {
  res.json(drinks)
})

app.get("/categories", (req, res) => {
  res.json(categories);
});


const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor esta escuchando");
});
