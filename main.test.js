const { expect, describe } = require("@jest/globals");
const getComments = require("./__mocks__/getComments.js");

const testArr = [1, 2, 3, 4];

describe("Testing comments count", () => {
  test("should return first value of arr", async () => {
    const result = await getComments(testArr);

    expect(result[0]).toBe(1);
  });

  test("should return arr length", async () => {
    const result = await getComments(testArr);

    expect(result.length).toBe(4);
  });
});
