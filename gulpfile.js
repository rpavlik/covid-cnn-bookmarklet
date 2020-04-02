/* eslint-disable require-jsdoc */
// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT

'use strict';

const {src, dest, watch, series, parallel} = require('gulp');

const eslint = require('gulp-eslint');
const cleanDir = require('gulp-clean-dir');
const bookmarklet = require('gulp-bookmarklet');
const rollup = require('rollup-stream');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const terser = require('gulp-terser');

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
  return getEntryPoints()
      .pipe(
          bookmarklet({
            format: 'htmlsingle',
          }),
      )
      .pipe(dest(outDir));
}

function jsTask() {
  return getEntryPoints()
      .pipe(bookmarklet())
      .pipe(dest(outDir));
}

function bareJsTask() {
  return getEntryPoints().pipe(dest(outDir));
}

function cleanTask(cb) {
  cleanDir(outDir);
  cb();
}

const allBuilds = parallel(bareJsTask, jsTask, htmlTask);

function watchTask(cb) {
  watch(
      files,
      {interval: 1000, usePolling: true},
      series(checkTask, allBuilds),
  );
  cb();
}

exports.default = series(cleanTask, parallel(checkTask, allBuilds), watchTask);
exports.check = series(checkTask);
exports.build = parallel(checkTask, allBuilds);
exports.clean = cleanTask;
