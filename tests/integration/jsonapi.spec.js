// @ts-check

import test, { expect } from "@playwright/test";

test('should create a bug report', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
  expect(response.ok()).toBeTruthy()

  const data = await response.json()
  expect(data).toMatchObject(expect.objectContaining({
    "userId": 1
  }));
});
