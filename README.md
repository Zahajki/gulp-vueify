# gulp-vueify
Compile `*.vue` component files using [vueify](https://github.com/vuejs/vueify#compiler-api) **without** Browserify.
This plugin is useful for [Electron](http://electron.atom.io/) apps, because Browserify and webpack are overkill for Electron apps.

For developing non-Electron apps, in other words normal web apps, this plugin is **not necessary** in most cases. Instead, just use
[webpack](https://webpack.github.io/docs/usage-with-gulp.html)+[vue-loader](http://vuejs.github.io/vue-loader/) or
[Browserify](https://github.com/gulpjs/gulp/tree/master/docs/recipes)+[vueify](https://github.com/vuejs/vueify) directly in your `gulpfile.js`.

## Installation
```bash
npm install gulp-vueify --save-dev
```

Typically you will also have to do:
```bash
npm install vueify-insert-css babel-core babel-plugin-transform-runtime babel-preset-es2015 --save-dev
```

## Usage
```javascript
var vueify = require('gulp-vueify');

gulp.task('vueify', function () {
  return gulp.src('components/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./dist'));
});
```

## API
### vueify([config])
#### config
Config for vueify. See [vueify document](https://github.com/vuejs/vueify#configuring-options) for details. `vue.config.js` file also works.
