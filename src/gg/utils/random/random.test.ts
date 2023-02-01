import {
  randomIdx,
  randomInt,
  randomStr,
  randomWebURL,
  randomEmail,
  randomHashedId,
  randomArrayItem,
  randomObjectItem,
} from "./random";

describe("randomIdx", () => {
  test("returns a random index from a given array", () => {
    const testArray = ["1", "2", "3"];
    const randomIndex = randomIdx(testArray);
    expect(testArray.map((_, idx) => idx)).toContain(randomIndex);
  });

  test("returns 0 for an empty array", () => {
    expect(randomIdx([])).toBe(0);
  });
});

describe("randomInt", () => {
  test("returns a random integer between 1 and the given max", () => {
    const testMax = 10;
    const randomIntValue = randomInt(testMax);
    expect(randomIntValue).toBeGreaterThanOrEqual(1);
    expect(randomIntValue).toBeLessThanOrEqual(testMax);
  });
});

describe("randomStr", () => {
  test("returns a random string with the given length", () => {
    const testLength = 10;
    const randomStrValue = randomStr(testLength);
    expect(randomStrValue.length).toBe(testLength);
  });
});

describe("randomWebURL", () => {
  test("returns a random web URL string", () => {
    const randomWebURLValue = randomWebURL();
    expect(typeof randomWebURLValue).toBe("string");
  });
});

describe("randomEmail", () => {
  test("returns a random email string", () => {
    const randomEmailValue = randomEmail();
    expect(typeof randomEmailValue).toBe("string");
  });
});

describe("randomHashedId", () => {
  test("returns a random hashed ID string", () => {
    const randomHashedIdValue = randomHashedId();
    expect(typeof randomHashedIdValue).toBe("string");
  });
});

describe("randomArrayItem", () => {
  test("returns a random item from the given array", () => {
    const testArray = [1, 2, 3];
    const randomArrayItemValue = randomArrayItem(testArray);
    expect(testArray).toContain(randomArrayItemValue);
  });

  test("returns a random item:array from the given array", () => {
    const testArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const randomArrayItemValue = randomArrayItem(testArray);
    expect(testArray).toContain(randomArrayItemValue);
  });
});

describe("randomObjectItem", () => {
  test("returns a random value from the given object", () => {
    const testObject = { a: 1, b: 2, c: 3 };
    const randomObjectItemValue = randomObjectItem(testObject);
    expect(Object.values(testObject)).toContain(randomObjectItemValue);
  });

  test("returns a random value:object from the given object", () => {
    const testObject = {
      a: { a1: 1, a2: 2, a3: 3 },
      b: { b1: 1, b2: 2, b3: 3 },
      c: { c1: 1, c2: 2, c3: 3 },
    };
    const randomObjectItemValue = randomObjectItem(testObject);
    expect(Object.values(testObject)).toContain(randomObjectItemValue);
  });
});
