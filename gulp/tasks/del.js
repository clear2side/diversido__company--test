module.exports = function () {
  $.gulp.task('del', function () {
    return $.del($.config.root);
  })
};