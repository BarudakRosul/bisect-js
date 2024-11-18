const assert = require("assert");
const { bisectRight, bisectLeft, insortRight, insortLeft } = require("./index.js");

describe("Testing 'bisect' module functions", function() {
  it("should return the correct range for duplicate elements", function() {
    let arr = [5, 10, 15, 15, 15, 20];
    let start = bisectLeft(arr, 15);
    let end = bisectRight(arr, 15);
    assert.strictEqual(start, 2);
    assert.strictEqual(end, 5);
    assert.deepStrictEqual(arr.slice(start, end), [15, 15, 15]);
  });

  it("should insert objects in order based on a key function", function() {
    let objects = [{name: "apple", price: 5}, {name: "banana", price: 10}, {name: "cherry", price: 15}];
    insortRight(objects, {name: "date", price: 12}, 0, null, (item) => item.price);
    assert.deepStrictEqual(objects.map(o => o.price), [5, 10, 12, 15]);
  });

  it("should insert element in correct position preserving order", function() {
    let arr = [1, 2, 4, 5];
    insortRight(arr, 3);
    assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);
  });

  it("should map values to correct intervals using bisectLeft", function() {
    let breakpoints = [100, 300, 500, 800, 1000];
    let grade = (value) => {
      let levels = ["low", "medium", "high", "very high", "extreme"];
      return levels[bisectLeft(breakpoints, value)];
    };
    assert.strictEqual(grade(450), "high");
    assert.strictEqual(grade(850), "extreme");
  });
});
