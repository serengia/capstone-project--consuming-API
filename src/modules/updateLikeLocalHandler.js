const updateLikeLocalHandler = (itemId) => {
  const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
  //   { itemId: "status"} // "like"|"unlike"
  const statusAvailable = storedLikes[itemId];
  if (statusAvailable) {
    if (statusAvailable === "like") {
      storedLikes[itemId] = "unlike";
    } else {
      storedLikes[itemId] = "like";
    }
  } else {
    storedLikes[itemId] = "like";
  }

  //   Update local storage
  localStorage.setItem("likes", JSON.stringify({ ...storedLikes }));
};

export const isAlreadyLiked = (itemId) => {
  const likesObj = JSON.parse(localStorage.getItem("likes")) || {};
  const foundStatus = likesObj[itemId];
  if (foundStatus && foundStatus === "like") return true;
  return false;
};

export const likeStatusAlreadyStored = (itemId) => {
  const likesObj = JSON.parse(localStorage.getItem("likes")) || {};
  const foundStatus = likesObj[itemId];
  if (foundStatus) return true;
  return false;
};

export default updateLikeLocalHandler;
