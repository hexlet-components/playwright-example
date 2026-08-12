// @ts-check

import test, { expect } from "@playwright/test";

test("posts:/id", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(data).toMatchObject(
    expect.objectContaining({
      userId: 1,
    }),
  );
});

test("posts", async ({ request }) => {
  const data = {
    title: "проекты хекслета",
    body: "рассказываем как с ними работать",
    userId: 1,
  };
  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data,
  });

  expect(response.status()).toBe(201);

  // Проверяется ответ сервера, а не исходные данные: раньше здесь стояло
  // expect(data).toMatchObject(...(data)), то есть сравнение объекта с самим
  // собой, и тест был истинным всегда, что бы API ни вернул.
  const responseData = await response.json();
  expect(responseData).toMatchObject(expect.objectContaining(data));
});
