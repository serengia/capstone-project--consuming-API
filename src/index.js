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
import commentsCounter from "./modules/commentsCounter.js";
import itemCounter from "./modules/itemCounter.js";
import updateLikeLocalHandler, {
  isAlreadyLiked,
  likeStatusAlreadyStored,
} from "./modules/updateLikeLocalHandler.js";

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
cardContainer.addEventListener("click", async (e) => {
  const likeIcon = e.target.closest(".item-icon");
  if (!likeIcon) return;

  const itemId = likeIcon.dataset.id;

  const likesCountWrapper = likeIcon
    ?.closest(".item-icon-container")
    ?.querySelector(".likes-count");

  let currentLikes = +likesCountWrapper?.textContent;

  if (likeStatusAlreadyStored(itemId)) {
    if (isAlreadyLiked(itemId)) {
      currentLikes -= 1;
      likeIcon.style.color = "";
    }
    if (!isAlreadyLiked(itemId)) {
      currentLikes += 1;
      likeIcon.style.color = "red";
    }
  } else {
    currentLikes += 1;
    likeIcon.style.color = "red";
  }
  likesCountWrapper.textContent = currentLikes;

  if (!likeStatusAlreadyStored(itemId)) {
    await postLikes({ item_id: itemId });
  }
  updateLikeLocalHandler(itemId);
});

// Handle page navigation
navigationHandler();
