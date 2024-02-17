import BASE_URI from 'src/API/BASE_URI';

const getAllCategories = async () => {
  try {
    const res = await fetch(`${BASE_URI}products/categories`);

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllCategories;
