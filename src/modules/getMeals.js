import MEALS_API_URL from "../globals.js";

const url = `${MEALS_API_URL}/filter.php?c=Chicken`;

export const getAllMeal = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data.meals;
};

export const getSingeMeal = async (id) => {
  try {
    const res = await fetch(`${MEALS_API_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};
