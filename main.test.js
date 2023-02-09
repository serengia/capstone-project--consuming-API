const { expect, describe } = require("@jest/globals");
const getComments = require("./__mocks__/getComments.js");

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
