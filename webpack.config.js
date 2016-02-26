module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'built/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js',]
  },
  module: {
    loaders: [
      { test: /\.tsx$|\.ts$/, loader: 'ts-loader' }
    ]
  }
}
