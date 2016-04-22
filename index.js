'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var compiler = require('vueify').compiler;
var path = require('path');

var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-vueify';

function gulpVueify (options) {
  return through.obj(function (file, encode, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported'));
      return callback();
    }

    // if file.isBuffer()
    if (options) {
      compiler.applyConfig(options);
    }
    compiler.compile(file.contents.toString(), file.path, function (err, result) {
      if (err) {
        this.emit('error', new PluginError(PLUGIN_NAME,
          'In file ' + path.relative(process.cwd(), file.path) + ':\n' + err.message));
        return callback();
      }
      file.path = gutil.replaceExtension(file.path, '.js');
      file.contents = new Buffer(result);
      callback(null, file);
    }.bind(this));
  });
}

module.exports = gulpVueify;
