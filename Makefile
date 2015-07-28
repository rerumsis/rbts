.PHONY: format install-dev-tools
model-build/rbts-cadastro.js: model/rbts-cadastro.ts
	tsc --noEmitOnError --out $@ $<

format:
	find . -type f -name "*.html" -not -wholename "./bower_components/*" -print0 | xargs -0 js-beautify -t -m 4 --type html -r -f
	find ./model/ -type f -name "*.ts" -print0 | xargs -0 tsfmt -r 

install-dev-tools:
	npm install -g typescript
	npm install -g typescript-formatter
