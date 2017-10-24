/**
 * @fileoverview Make sure that name is in the API
 * @author Ran Bar-Zik
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: 'Make sure that name is in the API',
			category: 'Fill me in',
			recommended: false
		},
		fixable: null,
		schema: [
			{
				type: 'object',
				properties: {
					musthaves: {
						type: 'array',
						items: {
							type: 'string'
						},
						minItems: 1,
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		]
	},

	create: context => {
		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			ExportDefaultDeclaration: node => {
				let musthaves = ['options'];
				let isName = false;
				if (context.options[0]) {
					musthaves = context.options[0].musthaves;
				}
				if (!node.declaration.properties) {
					return;
				}
				node.declaration.properties.forEach(ObjectExpression => {
					if (ObjectExpression.key.name === 'bindings') {
						ObjectExpression.value.properties.forEach(property => {
							if (musthaves.indexOf(property.key.name) !== -1) {
								isName = true;
							}
						});
					}
				});
				if (isName === false) {
					const requiredNames = context.options[0].musthaves.join(',');
					context.report(node, `API in component should have ${requiredNames}`);
				}
			}
		};
	}
};
