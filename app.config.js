const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const APP_PATH = path.join(SRC_PATH, 'app');

module.exports = {
    paths: {
        app: APP_PATH,
        src: SRC_PATH,
        dist: DIST_PATH
    }
};