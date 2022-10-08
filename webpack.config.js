const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    plugins:[
      new HtmlWebpackPlugin({
        template:"index.html",
        minify:{
          minifyCSS: true,
          minifyJs: true
        }
      })
    ],
    module: {
      rules: [
        {
          test:/\.tsx?$/,
          use: "ts-loader",
          exclude:/node_modules/,
        },
        {
          test: /\.m?js$/,
          exclude:/(node_modules)/,
          use:{
            loader:"babel-loader",
            options:{
              presets:["@babel/preset-env"]
            }
          }
        },
        {
           test: /\.s[ac]ss$/i,
           use:[
            { loader: "style-loader", options: { injectType: "styleTag" } },
            "module-style-loader",
            "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require("sass"),
              },
            },
           ]
        },
        {
          test:/\.(png|jpg|jpeg|gif)$/i,
          type:"asset"
        },
        {
          test:/\.(svg)$/i,
          type:"asset/source"
        }
      ],
    },
    resolve:{
        extensions: [".tsx",".ts",".js"]
    },
    output: {
      filename:'[name].bundle.js',
      path:path.resolve(__dirname,'dist'),
      assetModuleFileName:'assets/[hash][ext][query]',
      clean:true
    },
  };
