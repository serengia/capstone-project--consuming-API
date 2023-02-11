const { expect, describe } = require("@jest/globals");
const getComments = require("./__mocks__/getComments.js");
const getCommentsNode = require("./__mocks__/getCommentsNodes.js");
const itemCounter = require("./__mocks__/getItemsContainerNodes.js");
const getMeals = require("./__mocks__/getMeals.js");

const testArr = [{}, {}, {}, {}];

const testCommentNodes1 = `
<div class="comments">
  <p class="comment">Comment 1</p>
  <p class="comment">Comment 2</p>
  <p class="comment">Comment 3</p>
</div>
`;

const testCommentNodes2 = `
<div class="comments">
</div>
`;

describe("Check nodeList length", () => {
  test("Should return the comments count", () => {
    document.body.innerHTML = getCommentsNode(testCommentNodes1);
    const result = document.querySelectorAll(".comment");
    expect(result.length).toBe(3);
  });

  test("should return zero if no comment was found", () => {
    document.body.innerHTML = getCommentsNode(testCommentNodes2);
    const result = document.querySelectorAll(".comment");
    expect(result.length).toBe(0);
  });
});

const testItemNodes1 = `
<div class="cards">
  <p class="itemm">item 1</p>
  <p class="itemm">item 2</p>
  <p class="itemm">item 3</p>
</div>
`;
const testItemNodes2 = `
<div class="cards">
  
</div>
`;

describe("Check items nodeList length", () => {
  test("Should return the item count", () => {
    document.body.innerHTML = itemCounter(testItemNodes1);
    const result = document.querySelectorAll(".itemm");
    expect(result.length).toBe(3);
  });

  test("should return zero if no items found", () => {
    document.body.innerHTML = getCommentsNode(testItemNodes2);
    const result = document.querySelectorAll(".itemm");
    expect(result.length).toBe(0);
  });
});

describe("Testing comments count", () => {
  test("should return first value of arr", async () => {
    const result = await getComments(testArr);

    expect(result[0]).toEqual({});
  });

  test("should return arr length", async () => {
    const result = await getComments(testArr);

    expect(result.length).toBe(4);
  });
});

const testMeals = [
  {
    strMeal: "Ayam Percik",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    idMeal: 53050,
  },
  {
    strMeal: "Brown Stew Chicken",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
    idMeal: 52940,
  },
];

describe("Testing Items count", () => {
  test("should return first value of testMeals", async () => {
    const result = await getMeals(testMeals);

    expect(result[0]).toEqual(testMeals[0]);
  });

  test("should return testMeals length", async () => {
    const result = await getMeals(testMeals);

    expect(result.length).toBe(2);
  });

  test("should return id of first meal in testMeals ", async () => {
    const result = await getMeals(testMeals);

    expect(result[0].idMeal).toBe(53050);
  });

  test("should return name of second meal in testMeals ", async () => {
    const result = await getMeals(testMeals);

    expect(result[1].strMeal).toBe("Brown Stew Chicken");
  });
});
