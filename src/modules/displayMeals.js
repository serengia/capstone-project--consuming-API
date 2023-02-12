import { isAlreadyLiked } from "./updateLikeLocalHandler.js";

export const cardContainer = document.querySelector(".cards");

export const displayInHtml = async (data) => {
  const { meals, likes } = data;
  meals.forEach((meal) => {
    let numberOfLikes = 0;
    const result = likes.find((like) => like.item_id === meal.idMeal);
    if (result) numberOfLikes = result.likes;

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" alt="Meal-picture"/>
      <div class="item-meta-data">
          <h2 class="name">${meal.strMeal}</h2>                     
        <span class="item-icon-container">
          <i data-id='${meal.idMeal}' class="item-icon fa-solid fa-heart" ${
      isAlreadyLiked(meal.idMeal) ? 'style = "color:red;"' : null
    } ></i>
          <span  class="likes"><span class="likes-count">${numberOfLikes}</span> Likes</span>
          </span>
      </div>
        
      <button data-id-meal='${meal.idMeal}' class="card-btn">Comments</button>
                    
    `;
    cardContainer.appendChild(div);
  });
};
