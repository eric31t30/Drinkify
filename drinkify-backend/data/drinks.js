export const drinks = [
  {
    id: 1,
    name: "Margarita",
    color: "#F7D358",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 13,
      level: "Medium",
    },
    description: "Clásico ácido y refrescante con un toque cítrico.",
    ingredients: [
      { name: "Tequila", amount: "50ml" },
      { name: "Triple Sec", amount: "25ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Sal", amount: "Al gusto" },
    ],
    preparation:
      "Agitar todos los ingredientes con hielo y servir en vaso escarchado con sal.",
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
    color: "#A8E6A3",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 10,
      level: "Low",
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
    color: "#F6E5A6",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 8,
      level: "Low",
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
    color: "#D18B47",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 32,
      level: "High",
    },
    description: "Clásico fuerte con notas de whisky y naranja.",
    ingredients: [
      { name: "Whisky bourbon", amount: "60ml" },
      { name: "Bitter", amount: "2 dash" },
      { name: "Azúcar", amount: "1 terrón" },
    ],
    preparation: "Disolver azúcar con bitter, luego agregar whisky y hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345097/old-fashioned_gxq8rx.jpg",
      png: "Studio isolated Old Fashioned with large clear ice cube, sharp 8k cut-out.",
    },
    price: 14,
  },

  {
    id: 5,
    name: "Cosmopolitan",
    color: "#FF7E9E",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 20,
      level: "Medium",
    },
    description: "Dulce, cítrico y elegante.",
    ingredients: [
      { name: "Vodka", amount: "45ml" },
      { name: "Triple Sec", amount: "15ml" },
      { name: "Jugo de arándanos", amount: "30ml" },
    ],
    preparation: "Agitar con hielo y servir en copa Martini.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345487/cosmopolitan_b1nkzd.jpg",
      png: "Isolated cosmopolitan martini glass, clean transparent background, 8k.",
    },
    price: 13,
  },

  {
    id: 6,
    name: "Daiquiri",
    color: "#E4F2F7",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 17,
      level: "Medium",
    },
    description: "Equilibrio perfecto entre dulce y ácido.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Jarabe simple", amount: "20ml" },
    ],
    preparation: "Agitar con hielo y colar en copa fría.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764345803/daiquiri_l5psis.jpg",
      png: "Isolated daiquiri coupe glass, clean studio shot, 8k.",
    },
    price: 11,
  },

  {
    id: 7,
    name: "Sangría",
    color: "#B53A52",
    category: "Wine Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 7,
      level: "Low",
    },
    description: "Fresca mezcla de vino y frutas.",
    ingredients: [
      { name: "Vino tinto", amount: "150ml" },
      { name: "Frutas mixtas", amount: "Al gusto" },
      { name: "Refresco de naranja", amount: "50ml" },
    ],
    preparation: "Mezclar todo y dejar reposar mínimo 1 hora.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764353820/sangria_udkpsl.jpg",
      png: "Studio isolated glass of sangria with fruit pieces, transparent background.",
    },
    price: 9.5,
  },

  {
    id: 8,
    name: "Aperol Spritz",
    color: "#FCA94C",
    category: "Spritz",
    alcohol: {
      type: "Alcoholic",
      abv: 11,
      level: "Low",
    },
    description: "Ligero, burbujeante y con sabor amargo dulce.",
    ingredients: [
      { name: "Aperol", amount: "60ml" },
      { name: "Prosecco", amount: "90ml" },
      { name: "Soda", amount: "30ml" },
    ],
    preparation: "Servir en copa grande con hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/aperol-spritz_lnewe7.jpg",
      png: "Clean isolated Aperol Spritz wine glass, transparent background, 8k.",
    },
    price: 12,
  },

  {
    id: 9,
    name: "Moscow Mule",
    color: "#C57940",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 14,
      level: "Medium",
    },
    description: "Picante y refrescante con ginger beer.",
    ingredients: [
      { name: "Vodka", amount: "50ml" },
      { name: "Ginger beer", amount: "120ml" },
      { name: "Lima", amount: "15ml" },
    ],
    preparation: "Servir en taza de cobre con hielo.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/moscow-mule_t4z0fo.jpg",
      png: "Studio isolated copper mug with Moscow Mule, transparent background, 8k.",
    },
    price: 12.5,
  },

  {
    id: 10,
    name: "Limonada Frozen",
    color: "#D7F9FF",
    category: "Mocktail",
    alcohol: {
      type: "Non-alcoholic",
      abv: 0,
      level: "None",
    },
    description: "Refrescante, cítrica y perfecta para el calor.",
    ingredients: [
      { name: "Limón", amount: "2" },
      { name: "Hielo picado", amount: "1 taza" },
      { name: "Azúcar", amount: "2 cdas" },
    ],
    preparation: "Licuar todo hasta obtener textura frozen.",
    images: {
      full: "https://res.cloudinary.com/dzuibzgu2/image/upload/v1764354736/limonada-frozen_ihudhf.jpg",
      png: "Isolated frozen lemonade cup, clean white background, 8k.",
    },
    price: 6.5,
  },
];



const drinkPrompts = {
  full: [
    "Ultra realistic {{NAME}} cocktail on a polished wooden bar, dim warm bar lighting, shallow depth of field, cinematic 8k photography.",
    "Realistic {{NAME}} served on a light wooden café table, bright natural daylight from a nearby window, mint/fresh elements visible, 8k professional photo.",
    "Tropical {{NAME}} placed on a beach table with soft sand background, warm sunlight, vibrant colors, slight breeze, ultra detailed 8k.",
    "Moody {{NAME}} on a dark marble bar in an elegant lounge, dramatic low-key lighting, cinematic contrast, hyper realistic 8k.",
    "Vibrant {{NAME}} on a glossy black table inside a nightclub, neon reflections (pink/blue), bokeh lights, high-contrast realistic 8k.",
    "Minimalist {{NAME}} on a white marble counter, soft diffused daylight, elegant composition, frost and condensation visible, clean 8k photo.",
    "Refreshing {{NAME}} on an outdoor wooden terrace table at sunset, warm lighting, summer atmosphere, ultra detailed 8k.",
    "Aperitivo-style {{NAME}} on a European balcony metal table, golden-hour sunlight, realistic glass reflections, cinematic 8k.",
    "Industrial bar scene with a {{NAME}} cocktail on a concrete countertop, cool blue lighting and orange accents, extremely detailed 8k.",
    "Bright and refreshing {{NAME}} on a speckled stone café table, clean daylight, frosty details sharp, hyper-realistic 8k photography.",
  ],

  png: [
    "Ultra-detailed studio shot of a {{NAME}} cocktail in a realistic glass, isolated on transparent background, no shadows, no reflections, no props, 8k clean cut-out.",
    "Professional product photo of {{NAME}} cocktail, centered, transparent background, sharp edges, even lighting, no table, no background, ultra realism 8k.",
    "High-resolution isolated {{NAME}} glass, perfect cut-out, neutral lighting, transparent PNG style, 8k clarity.",
    "Studio photography of a single {{NAME}} cocktail, floating isolated on transparent background, crisp details, no surface, ultra sharp 8k.",
    "Realistic {{NAME}} cocktail rendered as a transparent-background PNG, clean edges, no shadows, balanced lighting, 8k resolution.",
  ],
};
