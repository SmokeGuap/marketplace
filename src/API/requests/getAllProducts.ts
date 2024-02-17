import BASE_URI from 'src/API/BASE_URI';

const getAllProducts = async (skip: string | undefined) => {
  const res = await fetch(
    `${BASE_URI}products/?limit=10&skip=${skip ? skip : '0'}`
  );

  const data = await res.json();

  return data;
};

export default getAllProducts;
