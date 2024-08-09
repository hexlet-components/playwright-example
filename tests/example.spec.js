// @ts-check

import { test, expect } from '@playwright/test';
import TodoMVCPage from '../models/TodoMVCPage';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const input = page.getByPlaceholder('What needs to be done?')

  const taskName = "Finish Hexlet's course"
  await input.fill(taskName);
  await input.press('Enter');

  await input.fill('second todo');
  await input.press('Enter');

  const item = page.getByTestId('todo-title').filter({ hasText: taskName })
  await expect(item).toBeVisible()
});

test('test with page object', async ({ page }) => {
  const todoMvcPage = new TodoMVCPage(page);
  await todoMvcPage.goto()

  const taskName = "Finish Hexlet's course"
  await todoMvcPage.addTodo(taskName)
  await todoMvcPage.addTodo('second todo')
  const item = todoMvcPage.getTaskItemByName(taskName)
  await expect(item).toBeVisible()
});
