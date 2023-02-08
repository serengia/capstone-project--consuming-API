import { INVOLVEMENT_API_URL } from "../globals.js";

export const postComment = async (data) => {
  try {
    await fetch(`${INVOLVEMENT_API_URL}/comments`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("SUCCESSFULLY POSTED A COMMENTS");
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
