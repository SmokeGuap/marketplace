import BASE_URI from 'src/API/BASE_URI';

const getAllProducts = async (skip: string | undefined) => {
  try {
    const res = await fetch(
      `${BASE_URI}products/?limit=10&skip=${skip ? skip : '0'}`
    );

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllProducts;
