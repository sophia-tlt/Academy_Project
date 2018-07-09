let path = require('path');

let conf = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module:{
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = conf;