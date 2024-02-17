import BASE_URI from 'src/API/BASE_URI';

const getAllProductsByCategory = async (category: string) => {
  const res = await fetch(`${BASE_URI}products/category/${category}`);

  const data = await res.json();

  return data;
};

export default getAllProductsByCategory;
