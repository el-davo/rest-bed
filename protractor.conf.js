exports.config = {
    params: {
        baseUrl: 'http://127.0.0.1:3000/'
    },
    framework: 'jasmine',
    baseUrl: 'http://127.0.0.1:3000/',
    specs: [
        './test/**/*.spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare() {
        require('ts-node/register');

        require('./index');
    }
};