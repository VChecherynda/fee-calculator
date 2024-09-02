const globals = require('globals');
const pluginJs = require('@eslint/js');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                process: true,
            },
            sourceType: 'commonjs',
        },
    },
    pluginJs.configs.recommended,
    {
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
];
