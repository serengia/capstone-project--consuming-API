import "./style.css";
import { getSingeMeal, getAllMeal } from "./modules/getMeals.js";
import { displayInHtml, cardContainer } from "./modules/displayMeals.js";
import generatePopupMarkup from "./modules/generatePopupMarkup.js";
import {
  getComments,
  insertCommentMarkup,
  postComment,
} from "./modules/commentsHandler.js";
import { postLikes, getLikes } from "./modules/likesHandler.js";
import navigationHandler from "./modules/navigationHandler.js";
import commentsCounter from "./modules/commentCounter.js";
import itemCounter from "./modules/itemCounter.js";

const popupHook = document.querySelector(".popup-hook");
const itemContainer = document.querySelector(".cards");

(async () => {
  const meals = await getAllMeal();
  const likes = await getLikes();
  await displayInHtml({ meals, likes });
  itemCounter();
})();

// Displaying popup
itemContainer.addEventListener("click", async (e) => {
  const clickedBtn = e.target.closest(".card-btn");

  if (!clickedBtn) return;
  const idMeal = JSON.parse(e.target.dataset.idMeal);

  // Fetching comments
  const commentsData = await getComments(idMeal);

  const { meals } = await getSingeMeal(idMeal);

  const detailedCardData = meals[0];

  const markup = generatePopupMarkup({ detailedCardData, commentsData });
  popupHook.innerHTML = markup;

  // Calculate and insert comments count
  commentsCounter();

  // Handle comment submit
  const form = document.querySelector(".comments-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const itemId = e.target.querySelector(".submit-comment-btn");

    if (!itemId) return;

    const item_id = itemId?.dataset?.idMeal;
    const username = e.target.name.value;
    const comment = e.target.comment.value;

    if (!username || !comment) return;

    postComment({ item_id, username, comment });

    // Insert comments to the ui
    const commentsContainer = e.target
      .closest(".popup")
      .querySelector(".comments");

    insertCommentMarkup(commentsContainer, { username, comment });

    // Clear inputs
    e.target.name.value = "";
    e.target.comment.value = "";
  });
});

// Close popup
popupHook.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".close-popup-btn");
  if (!closeBtn) return;
  popupHook.innerHTML = "";
});

popupHook.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".form-close-popup-btn");
  if (!closeBtn) return;
  popupHook.innerHTML = "";
});

// handle likes
cardContainer.addEventListener("click", (e) => {
  const closeLikeIcon = e.target.closest(".item-icon");
  if (!closeLikeIcon) return;
  closeLikeIcon.style.color = "red";
  const { id } = closeLikeIcon.dataset;
  postLikes({ item_id: id });
});

// Update number of likes
cardContainer.addEventListener("click", (e) => {
  const closeLikes = e.target
    .closest(".item-icon-container")
    ?.querySelector(".likes-count");
  if (!closeLikes) return;
  const currentLikes = +closeLikes?.textContent + 1;
  closeLikes.textContent = currentLikes?.toString();
});

// Handle page navigation
navigationHandler();
