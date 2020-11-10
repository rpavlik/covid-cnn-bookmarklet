/* eslint-disable require-jsdoc */
// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT

'use strict';

const {src, dest, watch, series, parallel} = require('gulp');

const eslint = require('gulp-eslint');
const cleanDir = require('gulp-clean-dir');
const bookmarklet = require('gulp-bookmarklet-babel7');
const rollup = require('rollup-stream');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const terser = require('gulp-terser');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const inject = require('gulp-inject-string');
const ghPages = require('@justeat/gulp-gh-pages');

const entryPoints = 'app/*.js';
const files = 'app/{,*/}*.js';
const outDir = './dist';

function checkTask() {
  return src(files)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

function getEntryPoints() {
  // We have multiple entry points,
  // but we'd like to bundle them each into their own file.
  return (
    src(entryPoints, {read: false})
    // transform file objects using gulp-tap plugin
        .pipe(
            tap(function(file) {
              // replace file contents with rollup's stream
              file.contents = rollup({
                input: file.path,
                format: 'iife',
                treeshake: true,
              });
            }),
        )
        .pipe(buffer())
        .pipe(
            terser({
              output: {
                comments: 'none',
              },
            }),
        )
  );
}

function htmlTask() {
  // first make importable bookmarklets file
  return getEntryPoints()
      .pipe(
          bookmarklet({
            format: 'htmlsingle',
          }),
      )
      .pipe(dest(outDir))
      // then the gh-pages landing page
      .pipe(rename('index.html'))
      .pipe(replace('<H1>Bookmarks</H1>', '<h1>CNN COVID-19 Links</h1>Generated by <a href="https://github.com/rpavlik/covid-cnn-bookmarklet">Ryan\'s COVID CNN Bookmarklet</a> project.<br />Stay at home and reduce the spread!'))
      .pipe(dest(outDir));
}

function redirTask() {
  return getEntryPoints()
      .pipe(inject.replace('javascript:', 'window.onload ='))
      .pipe(inject.wrap('<html><script>', '</script></html>'))
      .pipe(rename((path) => {
        path.basename = path.basename.replace('.min', '');
        path.extname = '.html';
      }))
      .pipe(dest(outDir));
}
function jsTask() {
  return getEntryPoints()
      // Write the raw JS files
      .pipe(dest(outDir))
      // Write the bookmarklet-ified js files
      .pipe(bookmarklet())
      .pipe(dest(outDir));
}

function cleanTask(cb) {
  cleanDir(outDir);
  cb();
}

const allBuilds = parallel(jsTask, htmlTask, redirTask);

function watchTask(cb) {
  watch(
      files,
      {interval: 1000, usePolling: true},
      series(checkTask, allBuilds),
  );
  cb();
}

function ciTask() {
  return src(outDir + '/**/*')
      .pipe(ghPages({push: false}));

}
function deployTask() {
  return src(outDir + '/**/*')
      .pipe(ghPages());
}

exports.default = series(cleanTask, parallel(checkTask, allBuilds), watchTask);
exports.check = series(checkTask);
exports.build = parallel(checkTask, allBuilds);
exports.clean = cleanTask;
exports.deploy = series(cleanTask, parallel(checkTask, allBuilds), deployTask);
exports.prepDeploy = series(cleanTask, parallel(checkTask, allBuilds), ciTask);
