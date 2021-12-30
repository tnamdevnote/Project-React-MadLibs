const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("no commas", () => {
    expect(addCommas(-10)).toEqual("-10")
  });

  test("negative number", () => {
    expect(addCommas(-1000)).toEqual("-1,000")
  });

  test("large number", () => {
    expect(addCommas(9876543210)).toEqual("9,876,543,210")
  });

  test("decimal", () => {
    expect(addCommas(-3141592.65)).toEqual("-3,141,592.65")
  });
});
