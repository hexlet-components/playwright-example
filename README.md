# playwright-example

Настроенный проект [Playwright](https://playwright.dev/) для курса [JS: Playwright](https://ru.hexlet.io/courses/js-playwright). На него ссылается урок про непрерывную интеграцию как на пример рабочей конфигурации.

## Зачем это нужно

Playwright легко запустить, но собрать из него проект, который переживёт рост, сложнее. Здесь собраны решения, до которых обычно доходят не сразу:

- **e2e и интеграционные тесты разведены** по `tests/e2e` и `tests/integration`. Первые водят браузер, вторые бьют в API напрямую и браузер не поднимают.
- **Page Object** в `models/TodoMVCPage.js`: селекторы страницы собраны в одном месте, и переделка вёрстки правится там, а не в каждом тесте.
- **Отчёты Allure** рядом со стандартным выводом, см. `make report-allure`.
- **Два сценария CI** в `.github/workflows`: полный прогон и прогон только изменившихся тестов (`--only-changed`), который экономит время на пулреквестах.

## Запуск

```bash
make install
make install-browsers   # браузеры качаются отдельно от зависимостей
make test
```

Остальное:

```bash
make test-ui         # интерактивный режим Playwright
make report          # HTML-отчёт последнего прогона
make report-allure   # отчёт Allure
```

Тесты ходят на публичный демо-стенд TodoMVC и в jsonplaceholder, поэтому своё приложение поднимать не нужно.

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=playwright-example)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=playwright-example).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
