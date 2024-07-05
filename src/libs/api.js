export const getTopAnimeResponse = async (request, query) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${request}?${query}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
