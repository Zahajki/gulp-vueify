# gulp-vueify
Compile `*.vue` component files using [vueify](https://github.com/vuejs/vueify) without Browserify.
This is useful for [Electron](http://electron.atom.io/) apps.

## Installation
```bash
npm install Zahajki/gulp-vueify --save-dev
```

Typically you will also have to do:
```bash
npm install babel-core babel-plugin-transform-runtime babel-preset-es2015 --save-dev
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
### vueify(config)
#### config
[Config](https://github.com/vuejs/vueify#configuring-options) for vueify. Optional.
