const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv()
    ],
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "fs": false
        }
    }
};
