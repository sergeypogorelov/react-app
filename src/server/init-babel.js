import babelRegister from 'babel-register';

const OPTIONS = {
    'plugins': [
        [
            'babel-plugin-transform-require-ignore',
            { extensions: ['.scss', '.jpg'] }
        ]
    ]
};

babelRegister(OPTIONS);