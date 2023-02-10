import { INVOLVEMENT_API_URL } from "../globals.js";

export const postLikes = async (data) => {
  await fetch(`${INVOLVEMENT_API_URL}/likes`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getLikes = async () => {
  try {
    const response = await fetch(`${INVOLVEMENT_API_URL}/likes`);
    const data = await response.json();

    if (!data) return [];
    return data;
  } catch (err) {
    return [];
  }
};
