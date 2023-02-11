const commentsCounter = () => {
  const commentsNode = document.querySelector(".comments");
  const commentsCountWrapper = document.querySelector(".comments-count");

  let commentsCount = 0;
  [...commentsNode.childNodes].forEach((node) => {
    if (node.ELEMENT_NODE && node?.classList?.contains("comment")) {
      commentsCount += 1;
    }
  });

  commentsCountWrapper.textContent = commentsCount;
};

export default commentsCounter;
