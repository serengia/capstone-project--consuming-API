const itemCounter = () => {
    const itemCount = document.querySelector(".item-count");
    const items = document.querySelector('.cards').querySelectorAll('.item');
    itemCount.textContent = items.length;
};

export default itemCounter;