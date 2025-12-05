export const drinks = [
  {
    id: 1,
    name: "Margarita",
    color: "#D4B244",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 13,
      level: "Medio",
    },
    description: "Clásico ácido y refrescante con un toque cítrico.",
    ingredients: [
      { name: "Tequila", amount: "50ml" },
      { name: "Triple Sec", amount: "25ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Sal", amount: "Al gusto" },
    ],
    preparation:
      "Agitar todos los ingredientes con hielo y servir en un vaso escarchado con sal.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764340852/margarita_aqsoqk.webp",
      png: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764340852/margarita-png_vpvn5k.png",
    },
    isPopular: true,
    price: 12.5,
  },

  {
    id: 2,
    name: "Mojito",
    color: "#65c75aff",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 10,
      level: "Bajo",
    },
    description: "Refrescante mezcla de menta, limón y ron.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Hierbabuena", amount: "6 hojas" },
      { name: "Lima", amount: "1/2" },
      { name: "Soda", amount: "Al gusto" },
    ],
    preparation:
      "Macerar la hierbabuena con la lima, añadir ron, hielo y completar con soda.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764342493/mojito_mqx7lh.webp",
      png: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764342493/mojito-png_ismdgp.png",
    },
    isPopular: true,
    price: 10,
  },

  {
    id: 3,
    name: "Piña Colada",
    color: "#cdd831ff",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 8,
      level: "Bajo",
    },
    description: "Dulce, cremosa y tropical.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Crema de coco", amount: "30ml" },
      { name: "Jugo de piña", amount: "90ml" },
    ],
    preparation: "Mezclar todos los ingredientes con hielo picado y servir.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764343651/pi%C3%B1a-colada_kcjhra.png",
      png: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764343651/pi%C3%B1a-colada-png_siln3z.png",
    },
    price: 11.5,
  },

  {
    id: 4,
    name: "Old Fashioned",
    color: "#B4783D",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 32,
      level: "Alto",
    },
    description: "Clásico fuerte con notas de whisky y naranja.",
    ingredients: [
      { name: "Whisky bourbon", amount: "60ml" },
      { name: "Bitter", amount: "2 dash" },
      { name: "Azúcar", amount: "1 terrón" },
    ],
    preparation: "Disolver el azúcar con bitter, luego agregar whisky y hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345097/old-fashioned_gxq8rx.jpg",
      png: "Studio isolated Old Fashioned with large clear ice cube, sharp 8k cut-out.",
    },
    price: 14,
  },

  {
    id: 5,
    name: "Cosmopolitan",
    color: "#D96480",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 20,
      level: "Medio",
    },
    description: "Dulce, cítrico y elegante.",
    ingredients: [
      { name: "Vodka", amount: "45ml" },
      { name: "Triple Sec", amount: "15ml" },
      { name: "Jugo de arándanos", amount: "30ml" },
    ],
    preparation: "Agitar con hielo y servir en una copa Martini.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345487/cosmopolitan_b1nkzd.jpg",
      png: "Isolated cosmopolitan martini glass, clean transparent background, 8k.",
    },
    price: 13,
  },

  {
    id: 6,
    name: "Daiquiri",
    color: "#D06A60",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 17,
      level: "Medio",
    },
    description: "Equilibrio perfecto entre dulce y ácido.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Jarabe simple", amount: "20ml" },
    ],
    preparation: "Agitar con hielo y colar en una copa fría.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345803/daiquiri_l5psis.jpg",
      png: "Isolated daiquiri coupe glass, clean studio shot, 8k.",
    },
    price: 11,
  },

  {
    id: 7,
    name: "Sangría",
    color: "#952F43",
    category: "Vino preparado",
    alcohol: {
      type: "Alcohólico",
      abv: 7,
      level: "Bajo",
    },
    description: "Fresca mezcla de vino y frutas.",
    ingredients: [
      { name: "Vino tinto", amount: "150ml" },
      { name: "Frutas mixtas", amount: "Al gusto" },
      { name: "Refresco de naranja", amount: "50ml" },
    ],
    preparation: "Mezclar todo y dejar reposar al menos 1 hora.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764353820/sangria_udkpsl.jpg",
      png: "Studio isolated glass of sangria with fruit pieces, transparent background.",
    },
    price: 9.5,
  },

  {
    id: 8,
    name: "Aperol Spritz",
    color: "#D9873A",
    category: "Spritz",
    alcohol: {
      type: "Alcohólico",
      abv: 11,
      level: "Bajo",
    },
    description: "Ligero, burbujeante y con sabor amargo dulce.",
    ingredients: [
      { name: "Aperol", amount: "60ml" },
      { name: "Prosecco", amount: "90ml" },
      { name: "Soda", amount: "30ml" },
    ],
    preparation: "Servir en una copa grande con hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/aperol-spritz_lnewe7.jpg",
      png: "Clean isolated Aperol Spritz wine glass, transparent background, 8k.",
    },
    price: 12,
  },

  {
    id: 9,
    name: "Moscow Mule",
    color: "#9E6A33",
    category: "Cóctel",
    alcohol: {
      type: "Alcohólico",
      abv: 14,
      level: "Medio",
    },
    description: "Picante y refrescante con ginger beer.",
    ingredients: [
      { name: "Vodka", amount: "50ml" },
      { name: "Ginger beer", amount: "120ml" },
      { name: "Lima", amount: "15ml" },
    ],
    preparation: "Servir en una taza de cobre con hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/moscow-mule_t4z0fo.jpg",
      png: "Studio isolated copper mug with Moscow Mule, transparent background, 8k.",
    },
    price: 12.5,
  },

  {
    id: 10,
    name: "Limonada Frozen",
    color: "#17B225",
    category: "Sin alcohol",
    alcohol: {
      type: "No alcohólico",
      abv: 0,
      level: "Sin alcohol",
    },
    description: "Refrescante, cítrica y perfecta para el calor.",
    ingredients: [
      { name: "Limón", amount: "2" },
      { name: "Hielo picado", amount: "1 taza" },
      { name: "Azúcar", amount: "2 cdas" },
    ],
    preparation: "Licuar todo hasta obtener una textura frozen.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/limonada-frozen_ihudhf.jpg",
      png: "Isolated frozen lemonade cup, clean white background, 8k.",
    },
    price: 6.5,
  },
];

export const categories = [...new Set(drinks.map((d) => d.category))];