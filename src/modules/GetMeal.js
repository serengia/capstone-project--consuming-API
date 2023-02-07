const cardContainer = document.querySelector(".cards");

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

const displayInHtml = async () => {
  const meals = await getData();
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" alt="Meal-picture">
                        <div class="name"><p>${meal.strMeal}</p><i class="fa-regular fa-heart"></i></div>
                        <p class="likes">7 Likes</p>
                        <button class="comment">Comments</button>
    `;
    cardContainer.appendChild(div);
  });
};

export default displayInHtml;
