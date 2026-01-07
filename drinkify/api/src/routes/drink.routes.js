import { drinks, categories } from '../data/data.js'

import { Router } from "express";
const router = Router();

router.get("/drinks", (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category = "all",
      level = "all",
      search = "",
    } = req.query;

    let filtered = [...drinks];

    if (category !== "all") {
      filtered = filtered.filter((d) => d.category === category);
    }

    if (level !== "all") {
      filtered = filtered.filter((d) => d.alcohol.level === level);
    }

    if (search) {
      const term = search.toLowerCase();
      filtered = filtered.filter((d) => d.name.toLowerCase().includes(term));
    }

    const total = filtered.length;

    const startIndex = (page - 1) * limit;
    const paginatedDrinks = filtered.slice(
      startIndex,
      startIndex + Number(limit)
    );

    res.json({
      data: paginatedDrinks,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
    
  } catch (error) {
    res.status(500).json({ message: "Error loading drinks" });
  }
});

router.get("/drinks/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid drink id" });
  }
  const drink = drinks.find((d) => d.id === id);
  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }
  res.json(drink);
});

router.get("/drinks/:id/recommendations", (req, res) => {
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
      const sharedTags =
        d.tags.filter((tag) => drink.tags.includes(tag)).length;
      const sameCategory = d.category === drink.category ? 1 : 0;
      const score = sharedTags + sameCategory;
      return { ...d, score };
    })
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  res.json(recommendations);
});

router.get("/categories", (req, res) => {
  res.json(categories);
});

export default router;