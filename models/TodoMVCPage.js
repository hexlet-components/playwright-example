import { Page } from '@playwright/test'

export default class TodoMVCPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.inputForNewTodo = page.getByPlaceholder('What needs to be done?')
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  getTaskItemByName(taskName) {
    return this.page.getByTestId('todo-title').filter({ hasText: taskName })
  }

  async addTodo(text) {
    // await this.inputForNewTodo.click()
    await this.inputForNewTodo.fill(text)
    await this.inputForNewTodo.press('Enter')
  }
}
