import BASE_URI from 'src/API/BASE_URI';

const getAllProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(`${BASE_URI}products/category/${category}`);

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllProductsByCategory;
