import express from "express";
import cors from "cors";
import { drinks, categories } from "./data/drinks.js";

const app = express();
app.use(cors());

app.get('/drinks', (req, res)=> {
  res.json(drinks)
})

app.get("/drink/:id", (req, res) => {
  const id = Number(req.params.id)
  const drink = drinks.find((d)=> d.id == id)

  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }

  res.json(drink);
});

app.get("/recommendations/drink/:id", (req, res) => {
  const drink = drinks.find((d) => d.id === Number(req.params.id));

  const {limit = 3} = req.query;

  const recommendations = drinks
    .filter((d) => d.id !== drink.id)
    .map((d) => {
      const sharedTags = d.tags.filter((tag) =>
        drink.tags.includes(tag)
      ).length;
      const sameCategory = d.category === drink.category ? 1 : 0;

      const score = sharedTags + sameCategory;

      return { ...d, score };
    })
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  res.json(recommendations);
});

app.get("/categories", (req, res) => {
  res.json(categories);
});



const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor esta escuchando");
});
