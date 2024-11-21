const { test, expect } = require("@playwright/test");

// Global hooks
test.beforeAll(async () => {
  console.log("beforeAll");
});

test.beforeEach(async () => {
  console.log("beforeEach");
});

test.afterEach(async () => {
  console.log("afterEach");
});

test.afterAll(async () => {
  console.log("afterAll");
});

// Test group
test.describe("group", () => {
  test("example test 1", async () => {
    console.log("Test 1 running...");
    expect(true).toBe(true);
  });

  test("example test 2", async () => {
    console.log("Test 2 running...");
    expect(true).toBe(true);
  });
});
