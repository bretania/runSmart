module.exports =function () {
    $.gulp.task ('watch',function() {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/sass/**/*.styl', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series('script'))
    });
}