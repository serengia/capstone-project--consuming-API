import { INVOLVEMENT_API_URL } from "../globals.js";

export const postComment = async (formData) => {
  try {
    const res = await fetch(`${INVOLVEMENT_API_URL}/comments`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    await res.json();
  } catch (err) {
    return err;
  }
};

export const getComments = async (itemId) => {
  try {
    const res = await fetch(
      `${INVOLVEMENT_API_URL}/comments?item_id=${itemId}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
};

export const insertCommentMarkup = (commentsContainer, commentData) => {
  const { username, comment } = commentData;

  // generate date
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  const markup = `<p>${`${year}-${month}-${day}`}, ${username} : ${comment}</p>`;

  const commentsCountWrapper = commentsContainer
    .closest(".popup")
    .querySelector(".comments-count");

  if (commentsContainer.querySelector(".no-comments-yet")) {
    commentsCountWrapper.textContent = 1;
    commentsContainer.innerHTML = markup;
  } else {
    const initialCommentsCount = commentsCountWrapper.textContent;
    commentsCountWrapper.textContent = +initialCommentsCount + 1;
    commentsContainer.insertAdjacentHTML("beforeend", markup);
  }
};
