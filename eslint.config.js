const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = [
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.browser } },
    {
        overrides: [
            {
                files: ['**/*.spec.js', '**/*.spec.jsx'],
                env: {
                    jest: true,
                },
            },
        ],
    },
    pluginJs.configs.recommended,
];
