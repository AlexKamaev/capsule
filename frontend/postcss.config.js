// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'), // Подключение import для CSS
    require('postcss-nested'), // Поддержка вложенных стилей
    require('autoprefixer'),   // Автоматическое добавление префиксов для кросс-браузерности
    require('cssnano')({ preset: 'default' }) // Минификация CSS
  ]
};
