module.exports =function () {
    $.gulp.task ('img',function() {
        return $.gulp.src('src/static/img/*.{png,jpg}')
            .pipe($.gp.tinypng('r4FQc780G3vqxbyFYXZC5ysR3B8WvPNY'))
            .pipe($.gulp.dest('build/static/img'));
    });
};