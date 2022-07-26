export const API_URL = process.env.BASE_URL;

export const getBeers = (path: string) => `${API_URL}/beers/${path}`;
