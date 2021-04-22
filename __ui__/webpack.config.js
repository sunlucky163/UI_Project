const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        alias: {
            modules: path.resolve(__dirname, './src'),
            config: path.resolve(__dirname, './config'),
        },
    },
};
