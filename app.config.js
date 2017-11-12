const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const CLIENT_PATH = path.resolve(SRC_PATH, 'client');
const SERVER_PATH = path.resolve(SRC_PATH, 'server');

const APPLICATION_PATH = path.join(CLIENT_PATH, 'application');
const ASSETS_PATH = path.join(CLIENT_PATH, 'assets');

module.exports = {
    paths: {
        
        src: SRC_PATH,
        dist: DIST_PATH,

        client: CLIENT_PATH,
        server: SERVER_PATH,

        application: APPLICATION_PATH,
        assets: ASSETS_PATH
        
    }
};