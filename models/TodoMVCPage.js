// @ts-check

export default class TodoMVCPage {
  /**
    * @param {import('@playwright/test').Page} page
    */
  constructor(page) {
    this.page = page;
    this.inputForNewTodo = page.getByPlaceholder('What needs to be done?')
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  /**
   * @param {string} taskName
   */
  getTaskItemByName(taskName) {
    return this.page.getByTestId('todo-title').filter({ hasText: taskName })
  }

  /**
   * @param {string} text
   */
  async addTodo(text) {
    // await this.inputForNewTodo.click()
    await this.inputForNewTodo.fill(text)
    await this.inputForNewTodo.press('Enter')
  }
}
