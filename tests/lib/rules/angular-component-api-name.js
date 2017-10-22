/**
 * @fileoverview Make sure that name is in the API
 * @author Ran Bar-Zik
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const eslint = require('eslint');
const rule = require('../../../lib/rules/angular-component-api-name');

const RuleTester = eslint.RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	}
});

const ruleTester = new RuleTester();
ruleTester.run('angular-component-api-name', rule, {

	valid: [
		{
			options: [{musthaves: ['name']}],
			code: `import controller from './locales.controller.js';export default {bindings: {name: '@',ngModel: '=',ngFieldRequired: '=',options: '=',},controller,template: require('./locales.html'),};`
		},
		{
			options: [{musthaves: ['moshe']}],
			code: `import controller from './locales.controller.js';export default {bindings: {moshe: '@',ngModel: '=',ngFieldRequired: '=',options: '=',},controller,template: require('./locales.html'),};`
		},
		{
			code: `import controller from './locales.controller.js';export default {bindings: {options: '@',ngModel: '=',ngFieldRequired: '=',options: '=',},controller,template: require('./locales.html'),};`
		}
	],

	invalid: [
		{
			code: `import controller from './locales.controller.js';export default {bindings: {ngModel: '=',ngFieldRequired: '=',options: '=',},controller,template: require('./locales.html'),};`,
			options: [{musthaves: ['name']}],
			errors: [{
				message: 'Use name for binding in component',
				type: 'ExportDefaultDeclaration'
			}]
		}
	]
});
