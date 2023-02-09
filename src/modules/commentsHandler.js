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

    const data = await res.json();
    console.log("SUCCESSFULLY POSTED A COMMENTS");
    console.log("WHAT WE GET>>>", data);
  } catch (err) {
    console.log("ERROR IN POSTING A COMMENTS");
    console.log(err);
  }
};

export const getComments = async (itemId) => {
  try {
    const res = await fetch(
      `${INVOLVEMENT_API_URL}/comments?item_id=${itemId}`
    );
    const data = await res.json();
    console.log("SUCCESSFULLY FETCHED COMMENTS");
    return data;
  } catch (err) {
    console.log("ERROR FETCHING COMMENTS");
    console.log(err);
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
