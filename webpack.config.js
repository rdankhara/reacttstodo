module.exports = { 
    entry: './src/app.tsx',
    devtool: 'source-map',
    output: { 
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    resolve: { 
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            }
        ]
    },
    mode: 'development'
}