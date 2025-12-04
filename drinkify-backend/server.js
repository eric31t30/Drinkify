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

app.get("/drink/:id", (req, res) => {
  const id = Number(req.params.id)
  const drink = drinks.find((d)=> d.id == id)

  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }

  res.json(drink);
});


const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor esta escuchando");
});
