import BASE_URI from 'src/API/BASE_URI';

const getAllCategories = async () => {
  const res = await fetch(`${BASE_URI}products/categories`);

  const data = res.json();

  return data;
};

export default getAllCategories;
