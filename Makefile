install:
	npm install

start-even:
	npx babel-node src/bin/brain-even.js
	
build:
	rm -rf dist
	npm run build

publish:
	npm publish --dry-run

lint:
	npx eslint .