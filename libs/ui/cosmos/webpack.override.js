module.exports = (webpackConfig) => {

  return {
    ...webpackConfig,
    module: {
      ...webpackConfig.module,
      rules: [
        ...webpackConfig.module.rules,
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
          },
        },
      ],
    },
  };
};
