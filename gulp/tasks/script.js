module.exports =function () {
    $.gulp.task ('script:lib',function() {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/static/js'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task ('script',function() {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('build/static/js'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}