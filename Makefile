db-push:
	npx drizzle-kit push

test:
	npx playwright test

report:
	 npx playwright show-report

test-ui:
	npx playwright test --ui

report-allure:
	npx allure serve
