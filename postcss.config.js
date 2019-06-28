module.exports = {
  plugins: {
    autoprefixer: {
      // browsers: [ // 注释它是可以在.browserslistrc文件里配置
      //   '>1%',
      //   'last 4 versions',
      //   'Firefox ESR',
      //   'not ie < 9', // React doesn't support IE8 anyway
      // ],
      flexbox: 'no-2009',
    },
    'postcss-flexbugs-fixes': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': { utf8: false },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    },
    'postcss-viewport-units': {},
    cssnano: {
      'cssnano-preset-advanced': {
        zindex: false,
        autoprefixer: false,
      },
    },
  },
};
