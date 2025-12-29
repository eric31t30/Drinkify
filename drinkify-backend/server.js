import express from "express";
import cors from "cors";
import { drinks, categories } from "./data/drinks.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.get('/drinks', (req, res)=> {
  try {
    res.json(drinks);
  } catch (err) {
    res.status(500).json({ message: "Error loading drinks" });
  }
})

app.get("/drinks/:id", (req, res) => {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid drink id" });
  }

  const drink = drinks.find((d)=> d.id == id)

  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }

  res.json(drink);
});

app.get("/drinks/:id/recommendations", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid drink id" });
  }

  const drink = drinks.find((d) => d.id === id);

  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }

  const limit = Number(req.query.limit) || 3;

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

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});


const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor esta escuchando");
});
