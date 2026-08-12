install:
	pnpm install

# Браузеры Playwright ставятся отдельно от зависимостей: они качаются в кеш
# вне node_modules, и в CI это отдельный шаг.
install-browsers:
	pnpm exec playwright install --with-deps chromium

db-push:
	pnpm exec drizzle-kit push

test:
	pnpm exec playwright test

test-ui:
	pnpm exec playwright test --ui

report:
	pnpm exec playwright show-report

report-allure:
	pnpm exec allure serve

lint:
	pnpm --silent run lint
	pnpm --silent run format:check

lint-fix:
	pnpm --silent run lint:fix
