import BASE_URI from 'src/API/BASE_URI';

const getAllProductsBySearch = async (search: string) => {
  const res = await fetch(`${BASE_URI}products/search?q=${search}`);

  const data = await res.json();

  return data;
};

export default getAllProductsBySearch;
