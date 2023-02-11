const generatePopupMarkup = (data) => {
  const { detailedCardData, commentsData } = data;

  const commentsMarkup = (commentsData) => {
    if (commentsData?.error) {
      return `<p class="no-comments-yet">No comments yet.</p>`;
    }

    return commentsData
      .map((comment) => {
        return `<p class="comment">${comment.creation_date}, ${comment.username} : ${comment.comment}</p>`;
      })
      .join("");
  };

  const resolvedCommentsMarkup = commentsMarkup(commentsData);

  return `
    <div class="popup-wrapper">
                <div class="popup">
                    <div class="popup-image-container" style='background-image: url(${detailedCardData.strMealThumb});'>
                        <span class="close-popup-btn">x</span>
                    </div>
                    <div class="content-container">
                        <h2 class="popup-title">${detailedCardData.strMeal}</h2>
                        <div class="popup-summary">
                           <p><a target="__blank" href="${detailedCardData.strYoutube}">Watch on Youtube</a></p>
                           <p>Category: ${detailedCardData.strCategory}</p>
                           <p>Area: ${detailedCardData.strArea}</p>
                           <p>Meal Id: ${detailedCardData.idMeal}</p>
                        </div>
                        <div class="comments-container">
                            <h3>Comments(<span class="comments-count">-</span>)</h3>
                            <div class="comments">
                               ${resolvedCommentsMarkup}  
                            </div>
                        </div>
                        <div class="add-comment-container">
                            <h3>Add a comment</h3>
                            <form class="comments-form">
                                <input type="text" name="name" placeholder="Your name" aria-label="Name input">
                                <textarea name="comment" id="comment" rows="4"></textarea>
                                <button type="submit" class="form-btn submit-comment-btn" data-id-meal='${detailedCardData.idMeal}'>Submit comment</button>
                                <button type="button" class="form-btn form-close-popup-btn">Close</button>
                            </form>
                        </div>
                    </div>
    
                </div>
            </div>
    `;
};
export default generatePopupMarkup;
