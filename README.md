# gulp-vueify
Compile `*.vue` component files using [vueify](https://github.com/vuejs/vueify) without Browserify.
This is useful for [Electron](http://electron.atom.io/) apps.

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
Config for vueify. See [vueify document](https://github.com/vuejs/vueify#configuring-options).
