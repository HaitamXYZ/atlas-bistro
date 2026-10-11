// Demonstration imagery served from Unsplash. Replace with licensed or client-owned photos before commercial use.
const photo = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const images = {
  hero: photo('photo-1414235077428-338989a2e8c0', 1900),
  story: photo('photo-1551218808-94e220e084d2', 1200),
  experience: photo('photo-1517248135467-4c7edcad34c4', 1700),
  reservation: photo('photo-1774509619298-5ee42287b75b', 1700),
  dishScallops: photo('photo-1761095596755-99ba58997720', 900),
  dishBeef: photo('photo-1768203632885-91485e5f4036', 900),
  dishFish: photo('photo-1776097633704-6666ffafc58d', 900),
  dishVegetal: photo('photo-1785487395912-319991ebc180', 900),
  dishChocolate: photo('photo-1776763019245-2de2352cce7e', 900),
  dishCitrus: photo('photo-1767032778094-1edb984e5b23', 900),
  galleryChef: photo('photo-1761095596765-c8abe01d3aea', 1000),
  galleryDining: photo('photo-1774509619298-5ee42287b75b', 1200),
  galleryPlate: photo('photo-1761095596755-99ba58997720', 1100),
  galleryWine: photo('photo-1772479075224-473da668374a', 1000),
  galleryDetail: photo('photo-1770140304098-46700a5c45c8', 1100),
  galleryDessert: photo('photo-1777897400115-22a648fac292', 900),
};
