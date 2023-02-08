import "./style.css";
import displayInHtml, { getData, getSingeMeal,cardContainer } from "./modules/GetMeal.js";
import generatePopupMarkup from "./modules/generatePopupMarkup.js";
import { getComments, postComment } from "./modules/commentsHandler.js";
import { postLikes,getLikes } from "./modules/likesHandler";




const popupHook = document.querySelector(".popup-hook");
const itemContainer = document.querySelector(".cards");

(async () => {
  const meals = await getData();
  displayInHtml(meals);
})();

// Displaying popup
itemContainer.addEventListener("click", async (e) => {
  const clickedBtn = e.target.closest(".card-btn");

  if (!clickedBtn) return;
  const idMeal = JSON.parse(e.target.dataset.idMeal);

  // Fetching comments
  const commentsData = await getComments(idMeal);
  console.log("COMMENTSSSS...", commentsData);

  const { meals } = await getSingeMeal(idMeal);

  const detailedCardData = meals[0];

  const markup = generatePopupMarkup({ detailedCardData, commentsData });
  popupHook.innerHTML = markup;

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

cardContainer.addEventListener('click',(e)=>{
  const closeLikeIcon = e.target.closest('.item-icon');
  if(!closeLikeIcon) return;
  closeLikeIcon.style.color = 'red';
  const {id} = closeLikeIcon.dataset;
  postLikes({item_id:id});
})