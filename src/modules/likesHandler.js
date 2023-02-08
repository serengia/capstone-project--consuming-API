import { INVOLVEMENT_API_URL } from "../globals.js";

// eslint-disable-next-line import/prefer-default-export
export const postLike = async (data) => {
  try {
    await fetch(`${INVOLVEMENT_API_URL}/likes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Post liked SUCCESSFULLY");
  } catch (err) {
    console.log("Post liked FAILED");
    console.log(err);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const getLikes = async () => {
  try {
    const res = await fetch(`${INVOLVEMENT_API_URL}/likes`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.log("GETTING LIKES FAILED");
    console.log(err);
  }
};
