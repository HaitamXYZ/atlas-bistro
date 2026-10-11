import { images } from './images.js';

export const menuCategories = ['all', 'starters', 'mains', 'desserts'];

export const dishes = [
  {
    id: 'scallops-citrus',
    category: 'starters',
    price: 180,
    image: images.dishScallops,
    fr: { name: 'Finesse de mer aux agrumes', description: 'Bouchée marine dressée avec précision, condiment acidulé et herbes fraîches.' },
    en: { name: 'Citrus seafood finesse', description: 'A precisely plated seafood bite with bright condiment and fresh herbs.' },
  },
  {
    id: 'seasonal-vegetal',
    category: 'starters',
    price: 135,
    image: images.dishVegetal,
    fr: { name: 'Jardin de saison', description: 'Légumes travaillés en textures, vinaigrette douce et notes végétales.' },
    en: { name: 'Seasonal garden', description: 'Vegetables served in layered textures with a bright herb vinaigrette.' },
  },
  {
    id: 'signature-beef',
    category: 'starters',
    price: 165,
    image: images.dishBeef,
    fr: { name: 'Carpaccio de bœuf aux herbes', description: 'Fines tranches de bœuf, assaisonnement délicat et notes végétales.' },
    en: { name: 'Herbed beef carpaccio', description: 'Thinly sliced beef with delicate seasoning and fresh herbal notes.' },
  },
  {
    id: 'day-boat-fish',
    category: 'mains',
    price: 260,
    image: images.dishFish,
    fr: { name: 'Poisson du marché', description: 'Pêche du jour, beurre citronné, jeunes pousses et garniture de saison.' },
    en: { name: 'Market fish', description: 'Daily catch, lemon butter, young greens and a seasonal garnish.' },
  },
  {
    id: 'chocolate-ganache',
    category: 'desserts',
    price: 110,
    image: images.dishChocolate,
    fr: { name: 'Chocolat intense', description: 'Ganache noire, fruit rouge, éclats croquants et fleur de sel.' },
    en: { name: 'Intense chocolate', description: 'Dark ganache, red fruit, crisp accents and sea salt.' },
  },
  {
    id: 'citrus-finale',
    category: 'desserts',
    price: 95,
    image: images.dishCitrus,
    fr: { name: 'Cake citron, crème légère', description: 'Biscuit moelleux au citron, crème douce et fraîcheur d’agrumes.' },
    en: { name: 'Lemon cake, light cream', description: 'Soft lemon sponge, delicate cream and bright citrus freshness.' },
  },
];
