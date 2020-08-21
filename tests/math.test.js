const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

test("Should Calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("should calculate with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(95);
  expect(temp).toBe(35);
});

test("Should convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(35);
  expect(temp).toBe(95);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add 2 numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("add 2 numbers async await", async () => {
  const sum = await add(3, 5);
  expect(sum).toBe(8);
});
