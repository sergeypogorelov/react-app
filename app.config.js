const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const APPLICATION_PATH = path.join(SRC_PATH, 'application');
const ASSETS_PATH = path.join(SRC_PATH, 'assets');

module.exports = {
    paths: {
        
        src: SRC_PATH,
        dist: DIST_PATH,

        application: APPLICATION_PATH,
        assets: ASSETS_PATH
        
    }
};