# webstorm-angular-unittest-templates
WebStorm file templates for unit-testing of applications based on [AngularJS](https://angularjs.org/). This set of templates for controllers, directives and services is designed to minimize time needed to expand environment when new test cases should be created. There are two types of templates

 - Extended -- full list of mocks/tools I use often in testing, after creating new test, there probably will be something to remove or delete.
 - Simple -- lightweight template with thing that needed most in testing, usually nothing removed and lots added.

## Table of contents
[TOC]


Everything you need is in `/1.3/` folder, I'm using these templates for application that was built with AngularJS 1.3, but this does not mean you cannot use it with any version of AngularJS. Some tweeking might be required, also #self-tests might come handy.

## Contents
This repo includes WebStorm templates in `1.3/` folder for [AngularJS](https://angularjs.org/) 1.3 unit-testing and test project, that was covered with unit-tests using these templates. Currently in use two Karma configs for using [Mocha](http://mochajs.org/) + [Chai](http://chaijs.com/) + [Sinon.JS](http://sinonjs.org/) and [Jasmine](http://jasmine.github.io/) testing frameworks.
`tests/1.3` folder contains  

 - `/src` -- test project that should be covered with unit-tests
 - `/mocha` -- Unit-tests written using Mocha + Chai + Sinon.JS frameworks.
	 - `mocha/simple` -- simple templates used for testing project
	 - `mocha/extended` -- extended templates used for testing project
 - `jasmine` -- Unit-tests written using Jasmine framework, has same folders inside, as `/mocha/*`.

## Install
## #self-tests
This is simple test cases to test created environment, they may be used to know if environment was created properly. Just insert them into templates and run after new file from template was created. After first successful run #self-test can be removed.
### Jasmine
>#### Controller
 ```javascript
      it('#self-test', function() {
        expect(${DS}scope).to.be.ok;
        expect(controller).to.be.ok;
      });
 ```
>#### Directive
 ```javascript
      it('#self-test', function() {
        expect(${DS}parentScope).to.be.ok;
        expect(element).to.be.ok;
        expect(controller).to.be.ok;
        expect(${DS}scope).to.be.ok;
        expect(${DS}scope.${DS}parent).to.be.equal(${DS}parentScope);
      });
 ```
>#### Service
 ```javascript
      it('#self-test', function() {
        expect(service).to.be.ok;
      });
 ```
##### Chai

> Written with [StackEdit](https://stackedit.io/).