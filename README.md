# eslint-plugin-angular-component-api [![Build Status](https://travis-ci.org/barzik/eslint-plugin-angular-component-api.svg?branch=master)](https://travis-ci.org/barzik/eslint-plugin-angular-component-api)

API tester for Angular components. Making sure that Angular V 1.X has the API that we want to use.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-angular-component-api`:

```
$ npm install eslint-plugin-angular-component-api --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-angular-component-api` globally.

## Usage

Add `angular-component-api` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "angular-component-api"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "angular-component-api/angular-component-api-name": [2, {musthaves: ["nameOfAPIAttribute"]}]
    }
}
```

## Supported Rules

* angular-component-api-name - Making sure that `options` is included in the component API. Or any other attributes listed in the `musthaves`. For example in component defintion The linter wukk oass if options is defined.
Examples of incorrect code for this rule with the default { "musthaves": ["nameOfAPIAttribute] } option:
```
import controller from './some-controller.js';

export default {
  bindings: {
    name: '@',
    ngModel: '=',
    ngFieldRequired: '=',
  },
  controller,
  template: require('./some.html'),
  ...
};
```
```
import controller from './some-controller.js';

export default {
  controller,
  template: require('./some.html'),
  ...
};
```

Examples of correct code for this rule with the default { "musthaves": ["nameOfAPIAttribute] } option:

```
import controller from './some-controller.js';

export default {
  bindings: {
    name: '@',
    ngModel: '=',
    ngFieldRequired: '=',
    options: '=',
  },
  controller,
  template: require('./some.html'),
  ...
};
```
```
import controller from './some-controller.js';

export default {
  bindings: {
    options: '=',
  },
  ...
};
```
# License

Licensed under the terms of the MIT license. See LICENSE file in component-api-linter for terms.
