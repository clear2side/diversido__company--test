module.exports = function () {
  $.gulp.task('svg', function () {
    return $.gulp.src('./app/sprite/**/*.svg')
      .pipe($.gulp.dest($.config.root + '/sprite/'))
  })
};