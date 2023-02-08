import MEALS_API_URL from "../globals.js";

const cardContainer = document.querySelector(".cards");

const url = `${MEALS_API_URL}/filter.php?c=Chicken`;

export const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("MEALS BRO=>", data);
  return data.meals;
};

export const getSingeMeal = async (id) => {
  try {
    const res = await fetch(`${MEALS_API_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const displayInHtml = async (meals) => {
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" alt="Meal-picture"/>
      <div class="item-meta-data">
          <h2 class="name">${meal.strMeal}</h2>                     
        <span class="item-icon-container">
          <i class="item-icon fa-regular fa-heart"></i>
          <span data-id="${meal.idMeal}" class="likes">7 Likes</span>
          </span>
      </div>
        
      <button data-id-meal='${meal.idMeal}' class="card-btn">Comments</button>
                    
    `;
    cardContainer.appendChild(div);
  });
};

export default displayInHtml;
