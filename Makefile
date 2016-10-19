FIXLANG = LC_ALL=C

prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) meteor

build:
	@cd app; meteor-build-client ../docs -p ""
	@touch docs/.nojekyll
	@echo "This directory hosts the built demo." > docs/readme.md

deploy:
	@cd app; DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy atom.nolme.meteorapp.com
