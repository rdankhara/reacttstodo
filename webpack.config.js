const path = require('path');
module.exports = { 
    entry: './src/app.tsx',
    devtool: 'source-map',
    output: { 
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    resolve: { 
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
    }, 
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(?:le|c)ss$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                  },
                ],
            }
        ]
    },
    mode: 'development'
}