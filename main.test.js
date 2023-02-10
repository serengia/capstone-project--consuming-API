const { expect, describe } = require("@jest/globals");
const getComments = require("./__mocks__/getComments.js");
const getMeals = require('./__mocks__/getMeals.js');

const testArr = [{}, {}, {}, {}];

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
  strMealThumb: "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  idMeal: 53050
  },
  {
  strMeal: "Brown Stew Chicken",
  strMealThumb: "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
  idMeal: 52940
  },
  ];

describe("Testing Items count", () => {
  test("should return first value of testMeals", async () => {
    const result = await getMeals(testMeals);

    expect(result[0]).toEqual({
      strMeal: "Ayam Percik",
      strMealThumb: "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
      idMeal: 53050
      });
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
