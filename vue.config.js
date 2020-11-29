module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.plugins.delete('prefetch');
    config.plugin('html').tap((args) => {
      args[0].title = process.env.VUE_APP_NAME;
      return args;
    });
  },
  devServer: { port: process.env.PORT || 8080 },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
      pages: 'src/app/pages',
      importPrefix: '@/app/pages/',
    },
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE,
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  transpileDependencies: ['vuex-module-decorators'],
};
